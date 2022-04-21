import { useRef } from 'react'
import useAdapter from './useAdapter'

const useNow = () => {
    const adapter = useAdapter()

    const now = useRef(adapter.date())

    return now.current
}

export {
    useNow
}

export default useNow
