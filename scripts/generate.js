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

// Функция для генерации styled.tsx
function generateStyledFile(styles) {
    let content = 'import styled from "styled-components";\n\n';

    for (const [componentName, styleProps] of Object.entries(styles)) {
        const tagName = styleProps.__html || 'div';
        content += `export const ${componentName} = styled.${tagName}\`\n`;

        // Добавляем все базовые CSS свойства 
        if (styleProps.base) {
            for (const [prop, value] of Object.entries(styleProps.base)) {
                const cssProp = camelToKebab(prop);
                content += `    ${cssProp}: ${value};\n`;
            }
        } else {
            console.error('❌ Error generating files:', error.message);
            process.exit(1);
        }

        // Если есть - добавляем media-блок
        if (styleProps.mobile && Object.entries(styleProps.mobile).length !== 0) {
            content += `    @media(max-width: 768px) {\n`
            for (const [prop, value] of Object.entries(styleProps.mobile)) {
                const cssProp = camelToKebab(prop);
                content += `      ${cssProp}: ${value};\n`;
            }
            content += `    }\n`
        }


        content += '\`;\n\n';
    }

    return content;
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
function parseContentTree(tree, level = 0, imports = new Set()) {
    let jsx = '';
    const indent = '    '.repeat(level);

    for (const [key, value] of Object.entries(tree)) {
        if (key !== "props") {
            imports.add(key);
        }

        if (typeof value === 'object' && value !== null && key !== "props") {
            const valueProps = parseInlineHtmlProps(value.props)
            if (value.content !== undefined) {
                // Это листовой узел с контентом
                jsx += `${indent}<${key} ${valueProps}>${value.content}</${key}>\n`;
            } else {
                // Это узел с дочерними элементами
                jsx += `${indent}<${key} ${valueProps}>\n`;
                jsx += parseContentTree(value, level + 1, imports);
                jsx += `${indent}</${key}>\n`;
            }
        }
    }

    return jsx;
}

// Функция для генерации index.tsx
function generateIndexFile(sectionName, mainContent, styles) {
    const imports = new Set();
    const jsxContent = parseContentTree(mainContent, 2, imports);

    // Сортируем импорты для консистентности
    const sortedImports = Array.from(imports).sort();

    let content = 'import React from "react";\n';
    content += `import { ${sortedImports.join(', ')} } from "./styled";\n\n`;
    content += `export const ${sectionName} = () => {\n`;
    content += `    return (\n`;
    content += jsxContent;
    content += `    );\n`;
    content += `};\n`;

    return content;
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

    let content = `import type { Metadata } from 'next'\n`;
    content += importsContent;
    content += `import './global.css'\n\n`;
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

        // 2. Генерация секций
        if (config.sections) {
            for (const [sectionName, sectionData] of Object.entries(config.sections)) {
                const sectionDir = `./src/sections/${sectionName}`;
                ensureDirectoryExists(sectionDir);

                // Генерация styled.tsx
                if (sectionData.styles) {
                    const styledPath = path.join(sectionDir, 'styled.tsx');
                    const styledContent = generateStyledFile(sectionData.styles);
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