import fs from 'fs'
import path from 'path'
import colorFactory from './color-factory'

const themes = ['light', 'dark'] as const

themes.map((theme) => {
    const palette = colorFactory(theme)
    const tokens = Object.entries(palette)
    const colorObject = {
        "color": {}
    }
    
    tokens.map(token => {
        colorObject.color[token[0]] = { value: token[1]}
    })

    const themeInfo = {
        name: { value: theme }
    }

    fs.writeFileSync(
        path.join(__dirname, `../tokens/${theme}/color.json`),
        JSON.stringify(colorObject, null, 4),
        'utf-8'
    )

    fs.writeFileSync(
        path.join(__dirname, `../tokens/${theme}/info.json`),
        JSON.stringify(themeInfo, null, 4),
        'utf-8'
    )
})