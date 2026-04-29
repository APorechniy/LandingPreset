const fs = require('fs');
const path = require('path');

// Функция для создания директории, если она не существует
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Функция для конвертации camelCase в kebab-case (для CSS свойств)
function camelToKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Функция для генерации global.css
function generateGlobalCSS(globalCssTokens) {
    let css = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            background: var(--primary);
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-main);
        }\n\n
    `;

    // Базовые токены (всегда применяются)
    css += ':root {\n';
    if (globalCssTokens.base) {
        for (const [key, value] of Object.entries(globalCssTokens.base)) {
            css += `    ${key}: ${value};\n`;
        }
    }
    css += '}\n\n';

    // Светлая тема
    css += ':root, [data-theme="light"] {\n';
    if (globalCssTokens.light) {
        for (const [key, value] of Object.entries(globalCssTokens.light)) {
            css += `    ${key}: ${value};\n`;
        }
    }
    css += '}\n\n';

    // Темная тема
    css += '[data-theme="dark"] {\n';
    if (globalCssTokens.dark) {
        for (const [key, value] of Object.entries(globalCssTokens.dark)) {
            css += `    ${key}: ${value};\n`;
        }
    }
    css += '}\n';

    return css;
}

// Функция для генерации index.module.css
function generateStylesFile(styles) {
    const keyframesKey = "__keyframes"
    let mainStyles = ''
    let mediaBlock = '@media(max-width: 768px) {\n'

    if (styles[keyframesKey] && Object.entries(styles[keyframesKey]).length !== 0) {
        // Сначала пробегаемся по всем названиям keyframe-ов и инициализируем их
        for (const [keyframeName, keyframeStyles] of Object.entries(styles[keyframesKey])) {
            mainStyles += `@keyframes ${keyframeName} {\n`

            // Далее, пробегаемся по всем точкам keyframes (это могут быть проценты или from/to)
            for (const [checkpoint, checkpointStyles] of Object.entries(keyframeStyles)) {
                mainStyles += `  ${checkpoint} {\n`;

                // И, наконец, парсим его стили и добавляем для каждой точки
                for (const [prop, value] of Object.entries(checkpointStyles)) {
                    const cssProp = camelToKebab(prop);
                    mainStyles += `    ${cssProp}: ${value};\n`;
                }
                mainStyles += `  }\n`;
            }
            mainStyles += `}\n\n`
        }
    }

    for (const [className, styleProps] of Object.entries(styles)) {
        if (className === keyframesKey) {
            continue;
        }
        mainStyles += `.${className} {\n`;

        // Добавляем все базовые CSS свойства 
        if (styleProps.base) {
            for (const [prop, value] of Object.entries(styleProps.base)) {
                const cssProp = camelToKebab(prop);
                mainStyles += `  ${cssProp}: ${value};\n`;
            }
        } else {
            console.error('❌ Error generating files:', error.message);
            process.exit(1);
        }

        mainStyles += `}\n\n`

        // Если есть - добавляем media-блок
        if (styleProps.mobile && Object.entries(styleProps.mobile).length !== 0) {
            mediaBlock += `  .${className} {\n`
            for (const [prop, value] of Object.entries(styleProps.mobile)) {
                const cssProp = camelToKebab(prop);
                mediaBlock += `    ${cssProp}: ${value};\n`;
            }
            mediaBlock += `  }\n`
        }
    }

    mediaBlock += `}\n`

    // Склеиваем базовые стили и медиа-запросы
    const resultStyles = mainStyles + mediaBlock

    return resultStyles;
}

function generateMeta(meta) {
    if (Object.keys(meta).length === 0) {
        return {}
    } else {
        const indent = '    '
        let metaContent = `export const metadata: Metadata = `
        metaContent += JSON.stringify(meta, null, 2);

        return metaContent
    }
}

function parseInlineHtmlProps(htmlProps) {
    if (htmlProps && Object.keys(htmlProps).length !== 0) {
        let inlineProps = ``

        for (const [key, value] of Object.entries(htmlProps)) {
            inlineProps += `${key}='${value}' `
        }

        return inlineProps
    } else {
        return ""
    }
}

// Функция для парсинга дерева контента и генерации JSX
function parseContentTree(tree, level = 0) {
    let jsx = '';
    const indent = '    '.repeat(level);

    const inlineHtmlProps = parseInlineHtmlProps(tree?.props);
    const tagName = tree?.tag;
    const classNameProp = tree.className ? `className={styles.${tree.className}}` : '';

    jsx += `${indent}<${tagName} ${classNameProp} ${inlineHtmlProps}>\n`;

    if ("childrens" in tree) {
        jsx += tree.childrens.reduce((acc, curr) => acc += parseContentTree(curr, level + 1), '');
    } else {
        if ("content" in tree) {
            jsx += `${indent}    ${tree.content ?? ''}\n`
        }
    }

    jsx += `${indent}</${tagName}>\n`;

    return jsx;
}

// Функция для генерации index.tsx
function generateIndexFile(sectionName, mainContent, styles) {
    const jsxContent = parseContentTree(mainContent, 2);

    let content = `import styles from "./index.module.css";\n\n`;
    content += `export const ${sectionName} = () => {\n`;
    content += `    return (\n`;
    content += jsxContent;
    content += `    );\n`;
    content += `};\n`;

    return content;
}

function generateLayoutFile(meta) {
    let content = `import type { Metadata, Viewport } from 'next';\n`
    content += `import './global.css'\n\n`;
    content += generateMeta(meta)
    content += `\n\n`
    content += `export default function RootLayout({\n`
    content += `    children,\n`
    content += `}: {\n`
    content += `    children: React.ReactNode\n`
    content += `}) {\n`
    content += `    return (\n`
    content += `        <html lang="ru" data-theme="dark">\n`
    content += `            <body>\n`
    content += `                {children}\n`
    content += `            </body>\n`
    content += `        </html>\n`
    content += `    )\n`
    content += `}\n`

    return content
}

function buildSectionsImports(sections) {
    let importsContent = ``
    let renderContent = ``

    for (const sectionName of Object.keys(sections)) {
        importsContent += `import { ${sectionName} } from '@/sections/${sectionName}';\n`
        renderContent += `        <${sectionName} />\n`
    }

    renderContent += ``

    return [importsContent, renderContent]
}

function generatePageFile(importsContent, renderContent) {
    const imports = new Set();

    // Сортируем импорты для консистентности
    const sortedImports = Array.from(imports).sort();

    let content = `${importsContent}\n`;
    content += `export default function Page() {\n`;
    content += `    return (\n`;
    content += `      <main>\n`;
    content += renderContent;
    content += `      </main>\n`;
    content += `    );\n`;
    content += `};\n`;

    return content;
}

// Основная функция генерации
function generateFromConfig(configPath) {
    try {
        // Читаем и парсим JSON конфиг
        const configContent = fs.readFileSync(configPath, 'utf8');
        const config = JSON.parse(configContent);

        // 1. Генерация global.css
        if (config.globalCssTokens) {
            const globalCssPath = './src/app/global.css';
            ensureDirectoryExists(path.dirname(globalCssPath));
            const globalCss = generateGlobalCSS(config.globalCssTokens);
            fs.writeFileSync(globalCssPath, globalCss);
            console.log(`✅ Generated: ${globalCssPath}`);
        }

        // 2. Генерация Layout и метатегов
        if (config.meta) {
            const layoutPath = './src/app/layout.tsx';
            ensureDirectoryExists(path.dirname(layoutPath));
            const layout = generateLayoutFile(config.meta);
            fs.writeFileSync(layoutPath, layout);
            console.log(`✅ Generated: ${layoutPath}`);
        }

        // 3. Генерация секций
        if (config.sections) {
            for (const [sectionName, sectionData] of Object.entries(config.sections)) {
                const sectionDir = `./src/sections/${sectionName}`;
                ensureDirectoryExists(sectionDir);

                // Генерация index.module.css
                if (sectionData.styles) {
                    const styledPath = path.join(sectionDir, 'index.module.css');
                    const styledContent = generateStylesFile(sectionData.styles);
                    fs.writeFileSync(styledPath, styledContent);
                    console.log(`✅ Generated: ${styledPath}`);
                }

                // Генерация index.tsx
                if (sectionData.mainContent) {
                    const indexPath = path.join(sectionDir, 'index.tsx');
                    const indexContent = generateIndexFile(sectionName, sectionData.mainContent, sectionData.styles);
                    fs.writeFileSync(indexPath, indexContent);
                    console.log(`✅ Generated: ${indexPath}`);
                }
            }

            const [importsContent, renderContent] = buildSectionsImports(config.sections)

            // Генерация page.tsx 
            if (importsContent && renderContent) {
                const globalAppPath = './src/app/page.tsx';
                const pageContent = generatePageFile(importsContent, renderContent);
                fs.writeFileSync(globalAppPath, pageContent);
                console.log(`✅ Generated: ${globalAppPath}`);
            }
        }

        console.log('\n🎉 File generation completed successfully!');

    } catch (error) {
        console.error('❌ Error generating files:', error.message);
        process.exit(1);
    }
}

// Запуск скрипта
const configPath = process.argv[2] || './src/settings/main_settings.json';

if (!fs.existsSync(configPath)) {
    console.error(`❌ Config file not found: ${configPath}`);
    console.log('Usage: node generate.js <path-to-config.json>');
    process.exit(1);
}

generateFromConfig(configPath);