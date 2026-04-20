import { Component, inject, Signal, computed } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-step5',
  standalone: true,
  template: `
    <div class="step-content result-card">
      <h2 class="step-title">¡Todo listo!</h2>
      <p class="step-description">Copia el código y pégalo en tu README.md de GitHub.</p>
      
      <div class="preview-container">
        <div class="preview-toolbar">
          <div class="toolbar-left">
            <div class="status-dot"></div>
            <span>README.md</span>
          </div>
        </div>
        <pre id="md-preview" class="code-display">{{ generatedMd() }}</pre>
      </div>

      <div class="export-actions">
        <button class="btn-primary" id="btn-copy" (click)="copyToClipboard()">
          <i data-lucide="copy"></i> Copiar Código
        </button>
        <button class="btn-outline" (click)="downloadMD()">
          <i data-lucide="download"></i> Descargar .md
        </button>
        <button class="btn-outline" style="border-style: dashed;" (click)="createAnother()">
          <i data-lucide="rotate-ccw"></i> Crear otro
        </button>
      </div>
    </div>
  `,
})
export class Step5Component {
  private profileService = inject(ProfileService);

  generatedMd = computed(() => this.profileService.generateMarkdown());

  copyToClipboard() {
    const text = this.generatedMd();
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('btn-copy');
      if (btn) {
        btn.innerHTML = '<i data-lucide="check"></i> ¡Copiado!';
        setTimeout(() => {
          btn.innerHTML = '<i data-lucide="copy"></i> Copiar Código';
        }, 2000);
      }
    });
  }

  downloadMD() {
    const text = this.generatedMd();
    const blob = new Blob([text], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'README.md';
    link.click();
  }

  createAnother() {
    location.reload();
  }
}