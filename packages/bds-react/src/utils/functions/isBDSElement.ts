import * as React from 'react'

export interface StyledComponentProps {
    /**
     * Override or extend the styles applied to the component.
     */
    innerRef?: React.Ref<any>
}

/**
 * Helper type for conform (describeConformance) components that are decorated with `withStyles
 * However, we don't declare classes on this type.
 * It is recommended to declare them manually with an interface so that each class can have a separate JSDOC.
 */
export type StandardProps<C, Removals extends keyof C = never> = Omit<C, Removals> &
    // each component declares it's classes in a separate interface for proper JSDOC
    StyledComponentProps & {
        ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>
        // TODO: Remove implicit props. Up to each component.
        className?: string
        style?: React.CSSProperties
    }

export type NamedBDSComponent = React.ComponentType & { bdsName: string }

export interface NamedBDSElement {
    type: NamedBDSComponent
    props: StandardProps<{}>
    key: string | number | null
}

function isBDSElement(element: any, bdsNames: string[]): element is NamedBDSElement {
    return (
        React.isValidElement(element) &&
        bdsNames.indexOf((element as NamedBDSElement).type.bdsName) !== -1
    )
}

export { isBDSElement }

export default isBDSElement
