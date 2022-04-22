/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */

let eventOrAnchorElWarned = false

const initCoreState = {
    isOpen: false,
    setAnchorElUsed: false,
    anchorEl: null,
    hovered: false,
    _childPopupState: null,
}

const hasChanges = (state, nextState) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in nextState) {
        // eslint-disable-next-line no-prototype-builtins
        if (state.hasOwnProperty(key) && state[key] !== nextState[key]) {
            return true
        }
    }
    return false
}

const createPopupState = ({
    state,
    setState: _setState,
    parentPopupState,
    popupId,
    variant,
}) => {
    const { isOpen, setAnchorElUsed, anchorEl, hovered, _childPopupState } = state

    // use lastState to workaround cases where setState is called multiple times
    // in a single render (e.g. because of refs being called multiple times)
    let lastState = state
    const setState = (nextState) => {
        if (hasChanges(lastState, nextState)) {
            _setState((lastState = { ...lastState, ...nextState }))
        }
    }

    const setAnchorEl = (_anchorEl) => {
        setState({ setAnchorElUsed: true, anchorEl: _anchorEl })
    }

    const open = (eventOrAnchorEl) => {
        if (!eventOrAnchorElWarned && !eventOrAnchorEl && !setAnchorElUsed) {
            eventOrAnchorElWarned = true
            /* eslint-disable no-console */
            console.error(
                'eventOrAnchorEl should be defined if setAnchorEl is not used'
            )
            /* eslint-enable no-console */
        }
        if (parentPopupState) {
            if (!parentPopupState.isOpen) return
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            parentPopupState._setChildPopupState(popupState)
        }
        if (typeof document === 'object' && document.activeElement) {
            document.activeElement.blur()
        }

        const newState = {
            isOpen: true,
            hovered: eventOrAnchorEl && eventOrAnchorEl.type === 'mouseenter',
        }

        if (eventOrAnchorEl && eventOrAnchorEl.currentTarget) {
            if (!setAnchorElUsed) {
                newState.anchorEl = (eventOrAnchorEl.currentTarget)
            }
        } else if (eventOrAnchorEl) {
            newState.anchorEl = (eventOrAnchorEl)
        }

        setState(newState)
    }

    const close = () => {
        if (_childPopupState) _childPopupState.close()
        if (parentPopupState) parentPopupState._setChildPopupState(null)
        setState({ isOpen: false, hovered: false })
    }

    const toggle = (eventOrAnchorEl) => {
        if (isOpen) {
            close()
        } else {
            open(eventOrAnchorEl)
        }
    }

    const setOpen = (
        nextOpen,
        eventOrAnchorEl
    ) => {
        if (nextOpen) {
            open(eventOrAnchorEl)
        } else close()
    }

    const onMouseLeave = (event) => {
        const { relatedTarget } = event
        
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if (hovered && !isElementInPopup(relatedTarget, popupState)) {
            close()
        }
    }

    // eslint-disable-next-line no-shadow
    const _setChildPopupState = _childPopupState => setState({ _childPopupState })

    const popupState = {
        anchorEl,
        setAnchorEl,
        setAnchorElUsed,
        popupId,
        variant,
        isOpen,
        open,
        close,
        toggle,
        setOpen,
        onMouseLeave,
        _childPopupState,
        _setChildPopupState,
    }

    return popupState
}

/**
 * Creates a ref that sets the anchorEl for the popup.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
const anchorRef = ({ setAnchorEl }) => {
    return (el) => {
        if (el) setAnchorEl(el)
    }
}

/**
 * Creates props for a component that opens the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
const bindTrigger = ({
    isOpen,
    open,
    popupId,
    variant,
}) => {
    return {
        // $FlowFixMe
        [variant === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen
            ? popupId
            : null,
        'aria-haspopup': variant === 'popover' ? true : undefined,
        onClick: open,
    }
}

/**
 * Creates props for a component that toggles the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
const bindToggle = ({
    isOpen,
    toggle,
    popupId,
    variant,
}) => {
    return {
        [variant === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen
            ? popupId
            : null,
        'aria-haspopup': variant === 'popover' ? true : undefined,
        onClick: toggle,
    }
}

/**
 * Creates props for a component that opens the popup while hovered.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
const bindHover = ({
    isOpen,
    open,
    onMouseLeave,
    popupId,
    variant,
}) => {
    return {
        [variant === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen
            ? popupId
            : null,
        'aria-haspopup': variant === 'popover' ? true : undefined,
        onMouseEnter: open,
        onMouseLeave,
    }
}

/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
const bindPopover = ({
    isOpen,
    anchorEl,
    close,
    popupId,
    onMouseLeave,
}) => {
    return {
        id: popupId,
        anchorEl,
        open: isOpen,
        onClose: close,
        onMouseLeave,
    }
}

/**
 * Creates props for a `Menu` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
const bindMenu = bindPopover

/**
 * Creates props for a `Popper` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */
const bindPopper = ({
    isOpen,
    anchorEl,
    popupId,
}) => {
    return {
        id: popupId,
        anchorEl,
        open: isOpen,
    }
}

const getPopup = ({ popupId }) => {
    return popupId && typeof document !== 'undefined'
        ? document.getElementById(popupId) // eslint-disable-line no-undef
        : null
}

const isAncestor = (parent, child) => {
    if (!parent) return false
    while (child) {
        if (child === parent) return true
        // eslint-disable-next-line no-param-reassign
        child = child.parentElement
    }
    return false
}

const isElementInPopup = (
    element,
    popupState
) => {
    const { anchorEl, _childPopupState } = popupState
    return (
        isAncestor(anchorEl, element) ||
        isAncestor(getPopup(popupState), element) ||
        (_childPopupState != null && isElementInPopup(element, _childPopupState))
    )
}

export {
    initCoreState,
    createPopupState,
    anchorRef,
    bindTrigger,
    bindToggle,
    bindHover,
    bindPopover,
    bindMenu,
    bindPopper
}
