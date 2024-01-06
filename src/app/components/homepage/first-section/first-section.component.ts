import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css'
})
export class FirstSectionComponent {

}
