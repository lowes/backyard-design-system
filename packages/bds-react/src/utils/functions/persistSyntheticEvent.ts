const persistSyntheticEvent = (event: React.SyntheticEvent) => {
    if (typeof event?.persist === 'function') {
        event.persist()
    }
}

export {
    persistSyntheticEvent
}

export default persistSyntheticEvent
