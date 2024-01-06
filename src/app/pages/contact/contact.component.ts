import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private http: HttpClient) {}
  private apiUrl = 'https://formspree.io/f/mwkgkzeb';
  email: string = ""
  sujet: string = ""
  nom: string = ""
  prenom: string = ""
  message: string = ""

  error : string |undefined

  verifMailFormat() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }


  onSubmit() {
    // Check fields
    if ((this.email || this.sujet || this.nom || this.prenom || this.message ) == "" ){
      this.error="Veuillez remplir tous les champs";
      return;
    }

    // Verify email format
    if (!this.verifMailFormat()) {
      this.error = "Veuillez saisir une adresse e-mail valide.";
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.apiUrl,
      { nom: this.nom,prenom:this.prenom, email:this.email, sujet:this.sujet, message: this.message },
      { 'headers': headers }).subscribe(
      (res: any) => {
        console.log(res);
        this.error="Message envoyé avec success";
      },
      (err: any) => {
        console.log(err);
        this.error="An error occurred while registering";
      }
    );
  }
}
