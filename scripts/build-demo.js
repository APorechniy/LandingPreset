const tar = require('tar');
const fs = require('fs');
const path = require('path');

async function createArchive(targetDirectoryName, sourceDir = 'dist', archiveName = 'deploy.tar.gz') {
    try {
        console.log(" Создаем архив...")
        // Проверяем существование исходной директории
        if (!fs.existsSync(sourceDir)) {
            throw new Error(`❌ Директория "${sourceDir}" не найдена`);
        }

        fs.renameSync(sourceDir, `./${targetDirectoryName}`)

        // Создаем архив
        await tar.c(
            {
                gzip: true,
                file: archiveName,
                cwd: path.dirname(targetDirectoryName)
            },
            [path.basename(targetDirectoryName)]
        );

        // Проверяем размер созданного архива
        const stats = fs.statSync(archiveName);
        const fileSizeInKB = (stats.size / 1024).toFixed(2);

        console.log(`✅ Архив создан: ${archiveName} (${fileSizeInKB} KB)`);

        fs.rm(targetDirectoryName, { recursive: true, force: true });

        console.log(`🎉 Успешный деплой!`);
    } catch (error) {
        console.error(`❌ Ошибка создания архива: ${error.message}`);
        throw error;
    }
}

function generateEcosystemFile(appName, port, distPath = "./dist") {
    try {
        console.log("Создание 'ecosystem.config.js'...")
        const ecosystemFile = {
            name: appName,
            script: 'server.js',
            cwd: './',

            env: {
                NODE_ENV: 'production',
                PORT: port,
                host: "0.0.0.0"
            },

            max_memory_restart: '1G',

            error_file: `/var/log/${appName}-error.log`,
            out_file: `/var/log/${appName}-out.log`,
            time: true
        }

        let content = `module.exports = {\n`
        content += `    apps: [`;
        content += JSON.stringify(ecosystemFile);
        content += `]\n`
        content += `}\n`

        fs.writeFileSync(`${distPath}/ecosystem.config.js`, content);
        console.log("✅ Файл конфигурации создан")
    } catch (error) {
        console.error(`❌ Ошибка при создании файла конфигурации: ${error.message}`);
        throw error;
    }
}

function mkdir(dirPath) {
    try {
        console.log(`Создание директории...`)
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`✅ Директория создана: ${dirPath}`);
    } catch (error) {
        console.error(`❌ Ошибка при создании директории: ${error.message}`);
        throw error;
    }
}

function copy(dirPath, targetPath) {
    try {
        console.log(`Копирование директории...`)
        fs.cpSync(dirPath, targetPath, { recursive: true });
        console.log(`✅ Скопирована директория: ${dirPath}`);
    } catch (error) {
        console.error(`❌ Ошибка при копировании директории: ${error.message}`);
        throw error;
    }
}

function copyIfExist(dirPath, targetPath) {
    try {
        console.log(`Копирование директории...`)
        if (fs.existsSync(dirPath)) {
            fs.cpSync(dirPath, targetPath, { recursive: true });
            console.log(`✅ Скопирована директория: ${dirPath}`);
        } else {
            console.log(`✅ Директория "${dirPath}" отсутствует. Пропуск`);
        }
    } catch (error) {
        console.error(`❌ Ошибка при копировании директории: ${error.message}`);
        throw error;
    }
}

const appName = process.argv[2]
const directoryName = process.argv[3]
const port = process.argv[4]

const distPath = "./dist"
const standaloneFilesPath = ".next/standalone/"
const staticFilesPath = ".next/static"
const distStaticPath = `${distPath}/${staticFilesPath}`
const publicPath = "public"

mkdir(distPath);
copy(standaloneFilesPath, distPath);
copy(staticFilesPath, distStaticPath);
copyIfExist(publicPath, distPath);
generateEcosystemFile(appName, port, distPath);
createArchive(directoryName, distPath);
