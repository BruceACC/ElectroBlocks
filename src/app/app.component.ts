import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ElectroBlocks';

  constructor(private router: Router) {}

  navigateToSection() {
    this.router.navigate(['/new-section']); // Asegúrate de configurar esta ruta
  }
}
