export const CDN_URL = 'https://icons-samuel.netlify.app';

export interface Tech {
  id: string;
  name: string;
  category: string;
}

export interface Social {
  id: string;
  name: string;
}

export const techData: Tech[] = [
  { id: 'html5', name: 'HTML5', category: 'Frontend' },
  { id: 'css3', name: 'CSS3', category: 'Frontend' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend' },
  { id: 'react', name: 'React', category: 'Frontend' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend' },
  { id: 'tailwindcss', name: 'TailwindCSS', category: 'Frontend' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend' },
  { id: 'php', name: 'PHP', category: 'Backend' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Backend' },
  { id: 'mysql', name: 'MySQL', category: 'Backend' },
  { id: 'python', name: 'Python', category: 'Backend' },
  { id: 'laravel', name: 'Laravel', category: 'Frameworks' },
  { id: 'astro', name: 'Astro', category: 'Frameworks' },
  { id: 'figma', name: 'Figma', category: 'Tools' },
  { id: 'git', name: 'Git', category: 'Tools' },
  { id: 'vite', name: 'Vite', category: 'Tools' },
  { id: 'libresprite', name: 'LibreSprite', category: 'Tools' },
  { id: 'github', name: 'GitHub', category: 'Tools' },
  { id: 'gitlab', name: 'GitLab', category: 'Tools' },
  { id: 'gitbash', name: 'Git Bash', category: 'Tools' },
  { id: 'visualstudiocode', name: 'VS Code', category: 'Tools' },
  { id: 'pokeball', name: 'Pokeball', category: 'fun' },
  { id: 'minecraft_diamond', name: 'Minecraft Diamond', category: 'fun' },
  { id: 'zelda', name: 'Zelda', category: 'fun' },
  { id: 'diamond_sword_minecraft', name: 'Diamond Sword', category: 'fun' },
  { id: 'console_control', name: 'Console', category: 'fun' },
];

export const funIcons = techData.filter(t => t.category === 'fun');

export const socialData: Social[] = [
  { id: 'web', name: 'Web' },
  { id: 'github', name: 'GitHub' },
  { id: 'linkedin', name: 'LinkedIn' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'x', name: 'X (Twitter)' },
  { id: 'discord', name: 'Discord' },
  { id: 'youtube', name: 'YouTube' },
  { id: 'twitch', name: 'Twitch' },
];

export const highlightedIcons = [
  { id: 'work', default: 'work' },
  { id: 'learning', default: 'learning' },
  { id: 'collab', default: 'collab' },
  { id: 'featured-project', default: 'featured-project' },
  { id: 'free-time', default: 'free-time' },
];

export const githubThemes = [
  { id: 'tokyonight', name: 'Tokyo Night' },
  { id: 'radical', name: 'Radical' },
  { id: 'dracula', name: 'Dracula' },
  { id: 'dark', name: 'Dark Puro' },
  { id: 'gruvbox', name: 'Gruvbox' },
];