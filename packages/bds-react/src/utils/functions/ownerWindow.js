import ownerDocument from './ownerDocument'

const ownerWindow = (node) => {
    const doc = ownerDocument(node)
    
    return doc.defaultView || window
}

export {
    ownerWindow
}

export default ownerWindow
