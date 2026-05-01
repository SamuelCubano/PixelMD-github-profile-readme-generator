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
  // --- SISTEMAS OPERATIVOS (os) ---
    { id: 'linux', name: 'Linux', category: 'os' },
    { id: 'windows', name: 'Windows', category: 'os' },
    { id: 'ios', name: 'iOS', category: 'os' },


    // --- PROGRAMMING LANGUAGES (languages) ---
    { id: 'javascript', name: 'JavaScript', category: 'languages' },
    { id: 'typescript', name: 'TypeScript', category: 'languages' },
    { id: 'php', name: 'PHP', category: 'languages' },
    { id: 'python', name: 'Python', category: 'languages' },
    { id: 'java', name: 'Java', category: 'languages' },
    { id: 'csharp', name: 'C#', category: 'languages' },
    { id: 'cplusplus', name: 'C++', category: 'languages' },
    { id: 'c', name: 'C', category: 'languages' },
    { id: 'ruby', name: 'Ruby', category: 'languages' },
    { id: 'kotlin', name: 'Kotlin', category: 'languages' },
    { id: 'rust', name: 'Rust', category: 'languages' },
    { id: 'dart', name: 'Dart', category: 'languages' },
    { id: 'bashscript', name: 'Bash Script', category: 'languages' },
    { id: 'go', name: 'Go', category: 'languages' },
    { id: 'sql', name: 'SQL', category: 'languages' },
    { id: 'swift', name: 'Swift', category: 'languages' },

    // --- FRONTEND DEVELOPMENT (frontend) ---
    { id: 'html5', name: 'HTML5', category: 'frontend' },
    { id: 'css3', name: 'CSS3', category: 'frontend' },
    { id: 'bootstrap', name: 'Bootstrap', category: 'frontend' },
    { id: 'tailwindcss', name: 'TailwindCSS', category: 'frontend' },

    // --- BACKEND DEVELOPMENT (backend) ---
    { id: 'nodejs', name: 'Node.js', category: 'backend' },
    { id: 'expressjs', name: 'Express.js', category: 'backend' },

    // --- FRAMEWORKS (frameworks) ---
    { id: 'react', name: 'React', category: 'frameworks' },
    { id: 'nextjs', name: 'Next.js', category: 'frameworks' },
    { id: 'angular', name: 'Angular', category: 'frameworks' },
    { id: 'astro', name: 'Astro', category: 'frameworks' },
    { id: 'vuejs', name: 'Vue.js', category: 'frameworks' },
    { id: 'svelte', name: 'Svelte', category: 'frameworks' },
    { id: 'laravel', name: 'Laravel', category: 'frameworks' },
    { id: 'django', name: 'Django', category: 'frameworks' },
    { id: 'flask', name: 'Flask', category: 'frameworks' },
    { id: 'fastapi', name: 'FastAPI', category: 'frameworks' },
    { id: 'nestjs', name: 'NestJS', category: 'frameworks' },

    // --- DATABASE (database) ---
    { id: 'postgresql', name: 'PostgreSQL', category: 'database' },
    { id: 'mysql', name: 'MySQL', category: 'database' },
    { id: 'mongodb', name: 'MongoDB', category: 'database' },
    { id: 'mariadb', name: 'MariaDB', category: 'database' },
    { id: 'sqlite', name: 'SQLite', category: 'database' },
    { id: 'redis', name: 'Redis', category: 'database' },
    { id: 'firestore', name: 'Firestore', category: 'database' },
    { id: 'dynamodb', name: 'DynamoDB', category: 'database' },

    // --- BACKEND AS A SERVICE (baas) ---
    { id: 'firebase', name: 'Firebase', category: 'baas' },

    // --- CLOUD & DEPLOYMENT (cloud) ---
    { id: 'aws', name: 'AWS', category: 'cloud' },
    { id: 'googlecloud', name: 'Google Cloud', category: 'cloud' },
    { id: 'digitalocean', name: 'DigitalOcean', category: 'cloud' },
    { id: 'vercel', name: 'Vercel', category: 'cloud' },
    { id: 'railway', name: 'Railway', category: 'cloud' },
    { id: 'netlify', name: 'Netlify', category: 'cloud' },
    { id: 'cloudflare', name: 'Cloudflare', category: 'cloud' },

    // --- DEVOPS (devops) ---
    { id: 'docker', name: 'Docker', category: 'devops' },
    { id: 'kubernetes', name: 'Kubernetes', category: 'devops' },
    { id: 'terraform', name: 'Terraform', category: 'devops' },
    { id: 'ansible', name: 'Ansible', category: 'devops' },
    { id: 'jenkins', name: 'Jenkins', category: 'devops' },
    { id: 'cloudformation', name: 'CloudFormation', category: 'devops' },
    { id: 'awssam', name: 'AWS Sam', category: 'devops' },
    { id: 'nginx', name: 'Nginx', category: 'devops' },
    

    // --- SOFTWARE TOOLS (tools) ---
    { id: 'visualstudiocode', name: 'VS Code', category: 'tools' },
    { id: 'git', name: 'Git', category: 'tools' },
    { id: 'github', name: 'GitHub', category: 'tools' },
    { id: 'gitlab', name: 'GitLab', category: 'tools' },
    { id: 'gitbash', name: 'Git Bash', category: 'tools' },
    { id: 'vite', name: 'Vite', category: 'tools' },
    { id: 'figma', name: 'Figma', category: 'tools' },
    { id: 'libresprite', name: 'LibreSprite', category: 'tools' },
    { id: 'dbeaver', name: 'DBeaver', category: 'tools' },
    { id: 'toad', name: 'Toad', category: 'tools' },
    { id: 'insomnia', name: 'Insomnia', category: 'tools' },

    // --- ARTIFICIAL INTELLIGENCE (ai) ---
    { id: 'openia', name: 'OpenAI', category: 'ai' },
    { id: 'anthropic', name: 'Anthropic', category: 'ai' },
    { id: 'gemini', name: 'Gemini', category: 'ai' },
    { id: 'deepseek', name: 'DeepSeek', category: 'ai' },
    { id: 'perplexity', name: 'Perplexity', category: 'ai' },
    { id: 'metaai', name: 'Meta AI', category: 'ai' },
    { id: 'copilot', name: 'GitHub Copilot', category: 'ai' },
    { id: 'cursorai', name: 'Cursor AI', category: 'ai' },
    { id: 'claudecode', name: 'Claude Code', category: 'ai' },
    { id: 'githubcopilot', name: 'GitHub Copilot', category: 'ai' },
    { id: 'ollama', name: 'Ollama', category: 'ai' },

    // --- FUN ICONS (fun) ---
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