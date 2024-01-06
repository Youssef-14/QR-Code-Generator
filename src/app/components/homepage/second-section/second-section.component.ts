import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {QRCodeModule} from "angularx-qrcode";
import {FormsModule} from "@angular/forms";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [CommonModule, QRCodeModule, FormsModule],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {
  @ViewChild('qrcodeElement', { static: false }) qrcodeElement!: ElementRef;

  text: string = '';
  inputValue: string = '';
  download: boolean = true;
  error : string | undefined;

  constructor() {}

  generateQRCode() {
    if (this.inputValue == null || this.inputValue == '') {
      this.error="Faut remplir le champ";
    } else {
      this.text = this.inputValue;
      this.download = false;
      this.error= undefined;
    }
  }

  Reset() {
    this.text = '';
    this.inputValue = '';
    this.download = true;
    this.error= undefined;
  }

  downloadAsPDF() {
    if (document.querySelector('canvas')) {
      const canvasElement = document.querySelector('canvas');

      if (canvasElement) {
        const pdf = new jspdf.jsPDF();
        const qrCodeImage = canvasElement.toDataURL('image/png');

        pdf.addImage(qrCodeImage, 'PNG', 10, 10, 50, 50); // Adjust position and size
        pdf.save('qrcode.pdf');
      } else {
        console.error('Canvas element not found within QR code component.');
      }
    } else {
      console.error('QR code element not available.');
    }
  }

  downloadAsPNG() {
    if (document.querySelector('canvas') ) {
      const canvasElement = document.querySelector('canvas')

      if (canvasElement) {
        html2canvas(canvasElement).then((canvas) => {
          const imageData = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = imageData;
          link.download = 'qrcode.png';
          link.click();
        });
      } else {
        console.error('Canvas element not found within QR code component.');
      }
    } else {
      console.error('QR code element not available.');
    }
  }

}
