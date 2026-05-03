import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-logo">Pixel<span>MD</span></div>
        <p>Potenciando perfiles con estética Pixel Art.</p>
        <div class="footer-credits">
            <span>© 2026</span> Samuel Cubano • Hecho con <i data-lucide="heart" class="heart-icon"></i> desde Venezuela.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}