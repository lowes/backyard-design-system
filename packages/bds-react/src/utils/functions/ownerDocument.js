const ownerDocument = (node) => {
    return (node && node.ownerDocument) || document
}

export {
    ownerDocument
}

export default ownerDocument