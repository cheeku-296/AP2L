const fs = require('fs');
const path = require('path');

const searchDirs = [
  'src/components/Landing',
  'src/components/solutions',
  'src/components/contact-us',
  'src/components/resources'
];

const mapping = {
  'py-16 md:py-24': 'py-12 md:py-16',
  'py-12 md:py-20': 'py-10 md:py-16',
  'py-16 md:py-20': 'py-12 md:py-16',
  'py-12 md:py-16': 'py-10 md:py-12',
  'py-10 md:py-16': 'py-8 md:py-12',
  'py-24': 'py-16',
  'py-20': 'py-16',
  'py-16': 'py-12'
};

// Sort keys by length descending to match longest first
const keys = Object.keys(mapping).sort((a, b) => b.length - a.length);
const regex = new RegExp('\\b(' + keys.join('|').replace(/ /g, '\\s+') + ')\\b', 'g');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('Hero')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // We only want to replace within the <section ... className="..."> tag to be safe
      // Let's replace only inside className="" or className={``}
      content = content.replace(/className=(["'{][^"'}]+["'}])/g, (match, classString) => {
        return 'className=' + classString.replace(regex, m => mapping[m.replace(/\s+/g, ' ')]);
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

searchDirs.forEach(dir => processDir(path.resolve(process.cwd(), dir)));
