import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { GridContainer as ContainerBase } from '../styles/GridStyles'
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider'

const ContainerV3: BDSForwardRef<ContainerV3Props> = React.forwardRef<ContainerV3Ref, ContainerV3Props>(
    function Container({ 
        className, 
        children, 
        container,
        ...props 
    }, ref) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme()

        validateBackyardTheme(theme, 'Grid.Container')

        return (
            <ContainerBase 
                className={classNames(
                    'container',
                    (container) ? `container--${container}` : '',
                    className
                )}
                {...props} 
                ref={ref}
            >
                {children}
            </ContainerBase>
        )
    },
)

type ContainerV3Ref = HTMLDivElement

interface ContainerV3Props extends BackyardBaseProps<ContainerV3Ref> {
    /** set the max width of the container */
    container?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

ContainerV3.bdsName = 'Container'

export { ContainerV3 }

export type { ContainerV3Props, ContainerV3Ref }

export default ContainerV3
