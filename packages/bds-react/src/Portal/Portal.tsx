import * as React from 'react'
import ReactDOM from 'react-dom'

import setRef from '../utils/functions/setRef'
import useForkRef from '../utils/hooks/useForkRef'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

/**
 * @todo types
 * @param container
 */
function getContainer(container) {
    // eslint-disable-next-line no-param-reassign
    container = typeof container === 'function' ? container() : container

    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(container)
}

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

/**
 * Backyard React Portal
 *
 * @todo Comments
 */
const Portal: BDSForwardRef<PortalProps> = React.forwardRef<
    PortalRef,
    PortalProps
>(function Portal({ children, container, disablePortal = false, onRendered }, ref) {
    const [mountNode, setMountNode] = React.useState(null)
    const handleRef = useForkRef(React.isValidElement(children) ? (children as any).ref : null, ref)

    useEnhancedEffect(() => {
        if (!disablePortal) {
            setMountNode(getContainer(container) || document.body)
        }
    }, [container, disablePortal])

    useEnhancedEffect(() => {
        if (mountNode && !disablePortal) {
            setRef(ref, mountNode)
            return () => {
                setRef(ref, null)
            }
        }

        return undefined
    }, [ref, mountNode, disablePortal])

    useEnhancedEffect(() => {
        if (onRendered && (mountNode || disablePortal)) {
            onRendered()
        }
    }, [onRendered, mountNode, disablePortal])

    if (disablePortal) {
        if (React.isValidElement(children)) {
            return React.cloneElement(children, {
                ref: handleRef,
            })
        }
        return children
    }

    return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
})

type PortalRef = HTMLElement

interface PortalProps extends BackyardBaseProps<PortalRef> {
    /**
     * Children of Portal
     */
    children: React.ReactNode
    /**
     * Container owner of portal
     */
    container: React.ReactInstance
    /**
     * Whether or not to disable portal functionality
     */
    disablePortal?: boolean
    /**
     * `onRendered` trigger function
     */
    onRendered?: () => void
}

Portal.bdsName = 'Portal'

export { Portal }

export type { PortalProps, PortalRef }

export default Portal
