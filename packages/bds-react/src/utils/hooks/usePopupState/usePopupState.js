import { useState, useRef, useEffect } from 'react'
import {
    initCoreState,
    createPopupState
} from './state'

const usePopupState = ({
    parentPopupState,
    popupId,
    variant,
}) => {
    const [state, setState] = useState(initCoreState)
    const isMounted = useRef(true)
    useEffect(
        () => () => {
            isMounted.current = false
        },
        []
    )
    useEffect(() => {
        if (popupId && typeof document === 'object') {
            const popup = document.getElementById(popupId)
            if (popup) popup.focus()
        }
    }, [popupId, state.anchorEl])

    return createPopupState({
        state,
        setState,
        parentPopupState,
        popupId,
        variant
    })
}

export {
    usePopupState
}

export default usePopupState
