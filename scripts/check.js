import { access, readFile } from 'node:fs/promises';

const requiredFiles = ['index.html', 'src/main.js', 'src/styles.css'];
for (const file of requiredFiles) {
  await access(file);
}

const html = await readFile('index.html', 'utf8');
const script = await readFile('src/main.js', 'utf8');
const styles = await readFile('src/styles.css', 'utf8');

const requiredContent = ['Afan Shafiq', 'ML Expert', 'AI Engineer', 'id="root"'];
for (const text of requiredContent) {
  if (!html.includes(text) && !script.includes(text)) {
    throw new Error(`Missing required content: ${text}`);
  }
}

for (const selector of ['hero', 'expertise-grid', 'project-grid', 'contact-section', '@keyframes']) {
  if (!styles.includes(selector)) {
    throw new Error(`Missing expected style token: ${selector}`);
  }
}

console.log('Portfolio files and required content look good.');
