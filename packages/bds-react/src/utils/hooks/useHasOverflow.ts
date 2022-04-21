import * as React from 'react'
import { ResizeObserver } from '@juggle/resize-observer'

import ownerWindow from '../functions/ownerWindow'

const useHasOverflow = (ref: any) => {
    const [hasOverflow, setHasOverflow] = React.useState(false)

    const calculateOverflow = () => {
        if (ref?.current) {
            const {
                offsetWidth: offsetX,
                offsetHeight: offsetY,
                scrollWidth: scrollX,
                scrollHeight: scrollY,
            } = ref.current

            setHasOverflow(offsetX < scrollX || offsetY < scrollY)
        }
    }

    React.useEffect(() => {
        // Add event listener
        ownerWindow().addEventListener('resize', calculateOverflow)
        // Call handler right away so state gets updated with initial window size
        calculateOverflow()
        // Remove event listener on cleanup
        return () => ownerWindow().removeEventListener('resize', calculateOverflow)
    }, [ref])

    const ro = new ResizeObserver(calculateOverflow)

    React.useEffect(() => {
        ro.observe(ref?.current)

        return () => ro.disconnect()
    }, [ref])

    return hasOverflow
}

export { useHasOverflow }

export default useHasOverflow
