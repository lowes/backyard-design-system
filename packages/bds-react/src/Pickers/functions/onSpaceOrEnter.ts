const onSpaceOrEnter = (innerFn: () => void, onFocus?: (event: React.KeyboardEvent<any>) => void) => (
    event: React.KeyboardEvent
) => {
    if (event.key === 'Enter' || event.key === ' ') {
        innerFn()

        // prevent any side effects
        event.preventDefault()
        event.stopPropagation()
    }

    if (onFocus) {
        onFocus(event)
    }
}

export { onSpaceOrEnter }

export default onSpaceOrEnter
