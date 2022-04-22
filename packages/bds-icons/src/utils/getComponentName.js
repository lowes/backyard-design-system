import path from 'path'

function getComponentName(destPath) {
    const splitregex = new RegExp(`[\\${path.sep}-]+`)

    const parts = destPath
        .replace('.js', '')
        .split(splitregex)
        .map((part) => part.charAt(0).toUpperCase() + part.substring(1))

    return parts.join('')
}

export default getComponentName
