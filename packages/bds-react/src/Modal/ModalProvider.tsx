import * as React from 'react'

import type { ModalProps } from './Modal'

const ModalContext = React.createContext<ModalContextValues>(null)

const ModalConsumer = ModalContext.Consumer

/**
 * `ModalProvider` Backyard React
 *
 * @param props - Modal props
 */
const ModalProvider = ({
    children,
    noLines,
    context: contextProp,
    ...override
}: ModalProviderProps): React.ReactElement<ModalProviderProps> => {
    // Memoize `ModalContextValues`
    const context = React.useMemo<ModalContextValues>(
        () => ({
            noLines,
            ...contextProp,
            ...override,
        }),
        [noLines, override],
    )

    return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
}

interface ModalContextValues extends Record<string, any> {
    /**
     * Whether or not `Modal` has lines between `ModalHeader` and `ModalFooter`
     */
    noLines?: boolean
}

interface ModalProviderProps extends ModalProps {
    // See `ModalProps`
}

export { ModalContext, ModalConsumer, ModalProvider }

export type { ModalContextValues, ModalProviderProps }

export default ModalProvider
