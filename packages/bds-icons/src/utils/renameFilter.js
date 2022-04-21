function renameFilter(svgPathObj) {
    let fileName = svgPathObj.base

    fileName = fileName
        .replace(/(_([0-9]+)px)?\.svg/, '.js')
        // or... (match, p1, p2, p3) => (p1 || p3).toUpperCase()
        .replace(/(^.)|(_)(.)/g, (match, p1) => p1.toUpperCase())

    // Example way to rename a file
    // if (fileName.indexOf('3dRotation') === 0) {
    //     fileName = `ThreeD${fileName.slice(2)}`
    // }

    return fileName
}

export default renameFilter
