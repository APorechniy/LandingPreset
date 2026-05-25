const fs = require('fs');

// Функция для создания директории, если она не существует
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function createFile(dirPath, filename) {
    try {
        fs.writeFileSync(`${dirPath}/${filename}`, "");
    } catch (error) {
        console.error(`❌ Ошибка при создании файла: ${error.message}`);
        throw error;
    }
}

const componentName = process.argv[2] || "Default"
const dirPath = "./src/components"

ensureDirectoryExists(`${dirPath}/${componentName}`)
createFile(`${dirPath}/${componentName}`, "index.tsx")
createFile(`${dirPath}/${componentName}`, "index.module.css")
console.log(`✅ Generated: ${dirPath}/${componentName}`);