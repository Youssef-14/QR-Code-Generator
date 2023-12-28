import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {QRCodeModule} from "angularx-qrcode";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [CommonModule, QRCodeModule, FormsModule],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {
  text: string="https://copilot.microsoft.com/";
  inputValue: string="";

  constructor() {
  }

  generateQRCode() {
    if (this.inputValue == null || this.inputValue == "")
      alert("Please enter a valid URL")
    else
    this.text = this.inputValue;
  }
}
