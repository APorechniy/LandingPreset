const fs = require('fs');
const sectionsPath = 'src/sections/';
const pagePath = 'src/app/page.tsx';
const globalCssPath = 'src/app/global.css';

try {
    fs.rmSync(sectionsPath, { recursive: true, force: true });
    console.log('✅ Sections has been removed');

    fs.rmSync(pagePath, { recursive: true, force: true });
    console.log('✅ Page has been removed');

    fs.rmSync(globalCssPath, { recursive: true, force: true });
    console.log('✅ Global styles has been removed');
} catch (err) {
    console.error('❌ Error while removing:', err);
}
