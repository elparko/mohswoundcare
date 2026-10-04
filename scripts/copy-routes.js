const fs = require('fs');
const path = require('path');

const ROUTES = [
  'first-48-hours',
  'stitches',
  'tape-strips',
  'staples',
  'skin-graft',
  'open-wound',
  'warning-signs',
  'pain',
  'scars-and-sun',
  'daily-life',
  'resources',
  'about',
];

const build = path.join(__dirname, '..', 'build');
const index = fs.readFileSync(path.join(build, 'index.html'));
for (const route of ROUTES) {
  fs.mkdirSync(path.join(build, route), { recursive: true });
  fs.writeFileSync(path.join(build, route, 'index.html'), index);
}
