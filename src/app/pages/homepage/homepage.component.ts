import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {FirstSectionComponent} from "../../components/homepage/first-section/first-section.component";
import {SecondSectionComponent} from "../../components/homepage/second-section/second-section.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FirstSectionComponent, SecondSectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  title = 'Homepage';
}
