import * as React from 'react'

import type { ModalControllerProps } from './ModalController'

const ModalControllerContext = React.createContext<ModalControllerContextValues>(null)

const ModalControllerConsumer = ModalControllerContext.Consumer

/**
 * `ModalControllerProvider` Backyard React
 *
 * @param props - Modal props
 */
const ModalControllerProvider = ({
    children,
    override,
    context: contextProp,
    ...props
}: ModalControllerProviderProps): React.ReactElement<ModalControllerProviderProps> => {
    // Memoize `ModalControllerContextValues`
    const context = React.useMemo<ModalControllerContextValues>(
        () => ({
            ...contextProp,
            ...override,
            ...props,
        }),
        [override, props, contextProp],
    )

    return (
        <ModalControllerContext.Provider value={context}>
            {children}
        </ModalControllerContext.Provider>
    )
}

interface ModalControllerContextValues extends ModalControllerProviderProps, Record<string, any> {
    /**
     * Props to override children with
     */
    override?: Record<string, any>
}

interface ModalControllerProviderProps extends Omit<ModalControllerProps, 'modal'> {
    /**
     * Props to override children with
     */
    override?: Record<string, any>
}

export { ModalControllerContext, ModalControllerConsumer, ModalControllerProvider }

export type { ModalControllerContextValues, ModalControllerProviderProps }

export default ModalControllerProvider
