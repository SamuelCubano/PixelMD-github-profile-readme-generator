import { Injectable, signal, computed, effect } from '@angular/core';
import { Tech, CDN_URL, highlightedIcons, githubThemes } from '../data/data';

export interface ProfileData {
  greeting: string;
  name: string;
  title: string;
  bio: string;
}

export interface HighlightData {
  work: string;
  learning: string;
  collab: string;
  featuredProject: string;
  freeTime: string;
}

export interface SocialLink {
  id: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly _currentStep = signal(1);
  private readonly _selectedStack = signal<Tech[]>([]);
  private readonly _profileData = signal<ProfileData>({ greeting: '', name: '', title: '', bio: '' });
  private readonly _highlightData = signal<HighlightData>({ work: '', learning: '', collab: '', featuredProject: '', freeTime: '' });
  private readonly _highlightIcons = signal<Record<string, string>>({});
  private readonly _socialLinks = signal<SocialLink[]>([]);
  private readonly _githubUser = signal('');
  private readonly _githubTheme = signal('tokyonight');
  private readonly _theme = signal<'dark' | 'light'>('dark');

  private readonly _isPickerOpen = signal(false);
  private readonly _pickerTarget = signal('');

  readonly currentStep = this._currentStep.asReadonly();
  readonly selectedStack = this._selectedStack.asReadonly();
  readonly profileData = this._profileData.asReadonly();
  readonly highlightData = this._highlightData.asReadonly();
  readonly highlightIcons = this._highlightIcons.asReadonly();
  readonly socialLinks = this._socialLinks.asReadonly();
  readonly githubUser = this._githubUser.asReadonly();
  readonly githubTheme = this._githubTheme.asReadonly();
  readonly theme = this._theme.asReadonly();

  readonly isPickerOpen = this._isPickerOpen.asReadonly();
  readonly pickerTarget = this._pickerTarget.asReadonly();

  readonly stackByCategory = computed(() => {
    const categories: Record<string, Tech[]> = {};
    for (const tech of this._selectedStack()) {
      if (!categories[tech.category]) categories[tech.category] = [];
      categories[tech.category].push(tech);
    }
    return categories;
  });

  constructor() {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) this._theme.set(saved);

    const initialIcons: Record<string, string> = {};
    for (const h of highlightedIcons) {
      initialIcons[h.id] = `${CDN_URL}/${h.default}.png`;
    }
    this._highlightIcons.set(initialIcons);

    if (typeof window !== 'undefined') {
      window.addEventListener('open-icon-picker', ((event: CustomEvent) => {
        this.openPicker(event.detail);
      }) as EventListener);
    }
  }

  nextStep() {
    if (this._currentStep() < 5) {
      this._currentStep.update(s => s + 1);
    }
  }

  prevStep() {
    if (this._currentStep() > 1) {
      this._currentStep.update(s => s - 1);
    }
  }

  goToStep(step: number) {
    if (step >= 1 && step <= 5) this._currentStep.set(step);
  }

  updateProfileData(data: Partial<ProfileData>) {
    this._profileData.update(p => ({ ...p, ...data }));
  }

  updateHighlightData(data: Partial<HighlightData>) {
    this._highlightData.update(h => ({ ...h, ...data }));
  }

  updateHighlightIcon(key: string, iconId: string) {
    this._highlightIcons.update(icons => ({ ...icons, [key]: `${CDN_URL}/${iconId}.png` }));
  }

  toggleTech(tech: Tech) {
    this._selectedStack.update(stack => {
      const exists = stack.find(t => t.id === tech.id);
      return exists ? stack.filter(t => t.id !== tech.id) : [...stack, tech];
    });
  }

  isTechSelected(techId: string): boolean {
    return this._selectedStack().some(t => t.id === techId);
  }

  updateSocialLinks(links: SocialLink[]) {
    this._socialLinks.set(links);
  }

  updateGithubUser(user: string) {
    this._githubUser.set(user);
  }

  updateGithubTheme(theme: string) {
    this._githubTheme.set(theme);
  }

  toggleTheme() {
    const newTheme = this._theme() === 'dark' ? 'light' : 'dark';
    this._theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  openPicker(targetId: string) {
    this._pickerTarget.set(targetId);
    this._isPickerOpen.set(true);
  }

  closePicker() {
    this._isPickerOpen.set(false);
  }

  generateMarkdown(): string {
    const profile = this._profileData();
    const highlight = this._highlightData();
    const icons = this._highlightIcons();
    const stack = this._selectedStack();
    const social = this._socialLinks();
    const ghUser = this._githubUser();
    const ghTheme = this._githubTheme();

    const greeting = profile.greeting || 'Hey, I\'m';
    const name = profile.name || 'Your Name';
    const title = profile.title || 'Developer';
    const bio = profile.bio;

    let md = `<div align="center">\n\n`;
    md += `<h1>${greeting} ${name}</h1>\n\n`;
    md += `<h4>${title}</h4>\n`;
    md += `</div>\n\n`;

    if (bio) md += `> ${bio}\n\n`;

    const sections = [
      { key: 'work', text: 'Currently working at' },
      { key: 'learning', text: 'Learning' },
      { key: 'collab', text: 'Looking to collaborate on' },
      { key: 'featuredProject', text: 'Featured project:' },
      { key: 'freeTime', text: 'In my free time' },
    ];

    for (const sec of sections) {
      const value = (highlight as any)[sec.key];
      if (value) {
        md += `<img src="${icons[sec.key]}" width="20" style="vertical-align: middle; image-rendering: pixelated;"> ${sec.text} **${value}**\n\n`;
      }
    }

    if (stack.length > 0) {
      md += `<p align="center">\n`;
      md += `  <br />\n`;
      md += `  <strong>My Stack & Tools</strong>\n`;
      md += `  <br /><br />\n`;
      for (const tech of stack) {
        md += `  <img src="${CDN_URL}/${tech.id}.png" alt="${tech.name}" width="50" style="image-rendering: pixelated; margin: 5px;" />\n`;
      }
      md += `</p>\n\n`;
    }

    let socialMd = '';
    for (const s of social) {
      if (s.url) {
        socialMd += `  <a href="${s.url}"><img src="${CDN_URL}/${s.id}.png" width="35" style="image-rendering: pixelated; margin: 5px;"></a>\n`;
      }
    }

    if (socialMd) {
      md += `<p align="center">\n`;
      md += `  <br />\n`;
      md += `  <strong>Contact me</strong>\n`;
      md += `  <br /><br />\n`;
      md += `${socialMd}`;
      md += `</p>\n\n`;
    }

    if (ghUser) {
      const statsParams = `&theme=${ghTheme}&hide_border=true&title_color=2f81f7&icon_color=2f81f7&bg_color=0d1117`;
      md += `<p align="center">\n`;
      md += `  <br />\n`;
      md += `  <strong>My Statistics</strong>\n`;
      md += `  <br /><br />\n`;
      md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${ghUser}${statsParams}" alt="Streak" height="170" />\n`;
      md += `</p>\n\n`;
    }

    return md;
  }
}