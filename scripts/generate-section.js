#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const sectionName = process.argv[2]

if (!sectionName) {
  console.error('❌ Укажите имя секции: yarn section Hero')
  process.exit(1)
}

const sectionDir = path.join(__dirname, '../src/sections', sectionName)

if (fs.existsSync(sectionDir)) {
  console.error(`❌ Секция "${sectionName}" уже существует`)
  process.exit(1)
}

fs.mkdirSync(sectionDir, { recursive: true })

const tsxContent = `import styles from './index.module.css'

interface ${sectionName}Props {
  // Добавьте пропсы при необходимости
}

export const ${sectionName} = ({}: ${sectionName}Props) => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2>${sectionName}</h2>
        {/* Содержание секции */}
      </div>
    </section>
  )
}
`

const cssContent = `.container {
  width: 100vw;
  height: 100vh;
  padding: 4rem 0;

  background: var(--bg-primary);
}

/* Стили для ${sectionName} */
`

fs.writeFileSync(path.join(sectionDir, `index.tsx`), tsxContent)
fs.writeFileSync(path.join(sectionDir, `index.module.css`), cssContent)

console.log(`✅ Секция "${sectionName}" создана в src/sections/${sectionName}`)
console.log(`📝 Импортируйте:`)
console.log(`import { ${sectionName} } from '@/sections/${sectionName}/${sectionName}'`)