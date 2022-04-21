/* eslint-disable eqeqeq */ // disabled for intentional use comparing document elements

const focusableDefault = [
    'INPUT',
    'BUTTON',
    'A',
    'SELECT',
    'TEXTAREA',
]

/**
 * Returns whether or not the target element can be focused from the previous
 *
 * @param prev - previous element to validate focus from
 * @param next - next element to validate focus to
 */
export const canFocus = (prev: HTMLElementIsh = null, next: HTMLElementIsh = null, focusable = focusableDefault): boolean => {
    // If either next or previous are falsy,
    if (!next || !prev) {
        // Cannot shift focus
        return false
    }

    // If tab index is -1,
    if (next.tabIndex === -1) {
        // `next` is not focusable
        return false
    }

    // If the component is a known focusable tag and it is not disabled,
    if (focusable.includes(next.tagName) && !next.disabled) {
        // `next` is focusable
        return true
    }

    // If `focus` function is defined on element,
    if (typeof next.focus === 'function') {
        // Attempt to focus element
        next.focus()

        // Check whether or not document has given element active focus,
        if (next == document.activeElement) {
            // `next` is focusable
            return true
        }

        // If `prev` can be refocused,
        // Note: should always work, but just in case...
        if (typeof prev !== 'boolean' && typeof prev.focus === 'function') {
            // Return focus to previous element
            prev.focus()
        }
    }

    // `next` is not focusable
    return false
}

export type HTMLElementIsh = Partial<HTMLElement> & {
    // Is the component disabled?
    disabled?: boolean
}

export default canFocus
