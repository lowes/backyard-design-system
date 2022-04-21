import getScrollbarSize from '../../utils/functions/getScrollbarSize'
import ownerDocument from '../../utils/functions/ownerDocument'
import ownerWindow from '../../utils/functions/ownerWindow'

const ariaHidden = (node, show) => {
    if (show) {
        node.setAttribute('aria-hidden', 'true')
    } else {
        node.removeAttribute('aria-hidden')
    }
}

const ariaHiddenSiblings = (container, mountNode, currentNode, nodesToExclude = [], show) => {
    const blacklist = [mountNode, currentNode, ...nodesToExclude]
    const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE']

    ;[].forEach.call(container.children, (node) => {
        if (
            node.nodeType === 1 &&
            blacklist.indexOf(node) === -1 &&
            blacklistTagNames.indexOf(node.tagName) === -1
        ) {
            ariaHidden(node, show)
        }
    })
}

// Is a vertical scrollbar displayed?
const isOverflowing = (container) => {
    const doc = ownerDocument(container)

    if (doc.body === container) {
        return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth
    }

    return container.scrollHeight > container.clientHeight
}

const findIndexOf = (containerInfo, callback) => {
    let idx = -1
    containerInfo.some((item, index) => {
        if (callback(item)) {
            idx = index
            return true
        }
        return false
    })
    return idx
}

const getHiddenSiblings = (container) => {
    const hiddenSiblings = []
    ;[].forEach.call(container.children, (node) => {
        if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
            hiddenSiblings.push(node)
        }
    })
    return hiddenSiblings
}

const getPaddingRight = (node) => {
    return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0
}

const handleContainer = (containerInfo, props) => {
    const restoreStyle = []
    const restorePaddings = []
    const { container } = containerInfo
    let fixedNodes

    if (!props.disableScrollLock) {
        if (isOverflowing(container)) {
            // Compute the size before applying overflow hidden to avoid any scroll jumps.
            const scrollbarSize = getScrollbarSize()

            restoreStyle.push({
                value: container.style.paddingRight,
                key: 'padding-right',
                el: container,
            })
            // Use computed style, here to get the real padding to add our scrollbar width.
            container.style['padding-right'] = `${getPaddingRight(container) + scrollbarSize}px`

            // .bds-fixed is a global helper.
            fixedNodes = ownerDocument(container).querySelectorAll('.bds-fixed')
            ;[].forEach.call(fixedNodes, (node) => {
                restorePaddings.push(node.style.paddingRight)
                // eslint-disable-next-line no-param-reassign
                node.style.paddingRight = `${getPaddingRight(node) + scrollbarSize}px`
            })
        }

        // Improve Gatsby support
        // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
        const parent = container.parentElement
        const scrollContainer =
            parent.nodeName === 'HTML' &&
            (window.getComputedStyle(parent)['overflow-y'] === 'scroll' ||
                window.getComputedStyle(parent)['overflow-y'] === 'auto')
                ? parent
                : container

        // Block the scroll even if no scrollbar is visible to account for mobile keyboard
        // screensize shrink.
        restoreStyle.push({
            value: scrollContainer.style.overflow,
            key: 'overflow',
            el: scrollContainer,
        })
        scrollContainer.style.overflow = 'hidden'
    }

    const restore = () => {
        if (fixedNodes) {
            ;[].forEach.call(fixedNodes, (node, i) => {
                if (restorePaddings[i]) {
                    // eslint-disable-next-line no-param-reassign
                    node.style.paddingRight = restorePaddings[i]
                } else {
                    node.style.removeProperty('padding-right')
                }
            })
        }

        restoreStyle.forEach(({ value, el, key }) => {
            if (value) {
                el.style.setProperty(key, value)
            } else {
                el.style.removeProperty(key)
            }
        })
    }

    return restore
}

export {
    ariaHidden,
    ariaHiddenSiblings,
    findIndexOf,
    getPaddingRight,
    getHiddenSiblings,
    handleContainer,
    isOverflowing,
}
