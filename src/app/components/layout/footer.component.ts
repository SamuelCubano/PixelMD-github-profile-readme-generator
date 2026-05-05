import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">Pixel<span>MD</span></div>
            <p>Empowering developer profiles with Pixel Art aesthetics.</p>
          </div>
          <div class="footer-links">
            <h4>Navigation</h4>
            <a href="/"><i data-lucide="home"></i> Home</a>
            <a href="https://github.com/SamuelCubano/PixelMD-github-profile-readme-generator" target="_blank"><i data-lucide="github"></i> Repository</a>
            <a href="https://icons-samuel.netlify.app/" target="_blank"><i data-lucide="image"></i> Samuel Icons</a>
          </div>
          <div class="footer-links">
            <h4>Resources</h4>
            <a href="https://github.com/SamuelCubano/PixelMD-github-profile-readme-generator/issues" target="_blank"><i data-lucide="bug"></i> Report Bug</a>
            <a href="https://github.com/SamuelCubano/PixelMD-github-profile-readme-generator/blob/main/README.md" target="_blank"><i data-lucide="book-open"></i> Documentation</a>
            <a href="https://github.com/SamuelCubano/PixelMD-github-profile-readme-generator/fork" target="_blank"><i data-lucide="git-fork"></i> Fork Project</a>
          </div>
          <div class="footer-social">
            <h4>Connect</h4>
            <div class="social-icons">
              <a href="https://github.com/SamuelCubano" target="_blank" title="GitHub"><i data-lucide="github"></i></a>
              <a href="https://icons-samuel.netlify.app/" target="_blank" title="Portfolio"><i data-lucide="globe"></i></a>
            </div>
          </div>
        </div>
        <div class="footer-credits">
          <span>© 2026</span> Samuel Cubano • Made with <img src="https://icons-samuel.netlify.app/fullheart.png" width="19" height="19" style="image-rendering: pixelated;"> from Venezuela.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}