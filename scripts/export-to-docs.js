import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const root = process.cwd();
const outDir = path.join(root, 'out');
const docsDir = path.join(root, 'docs');

try {
  console.log('Running next build and export...');
  execSync('npx next build', { stdio: 'inherit' });
  execSync('npx next export', { stdio: 'inherit' });

  // Remove existing docs/ if present
  if (fs.existsSync(docsDir)) {
    console.log('Removing existing docs/ directory...');
    fs.rmSync(docsDir, { recursive: true, force: true });
  }

  // Move out/ to docs/
  if (fs.existsSync(outDir)) {
    console.log('Moving out/ to docs/');
    fs.renameSync(outDir, docsDir);
  } else {
    console.error('Export failed: out/ directory not found');
    process.exit(1);
  }

  // Create .nojekyll to prevent GitHub Pages from using Jekyll (which can cause README.md to be served)
  const nojekyllPath = path.join(docsDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll in docs/');

  console.log('Export complete. You can now push the docs/ directory to GitHub and enable Pages from branch/main/docs');
} catch (err) {
  console.error('Export to docs failed:', err);
  process.exit(1);
}
