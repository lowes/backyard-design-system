import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { GridContainer as ContainerBase } from '../styles/GridStyles'
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider'

const Container: BDSForwardRef<ContainerProps> = React.forwardRef<ContainerRef, ContainerProps>(
    function Container({ className, children, ...props }, ref) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme()

        validateBackyardTheme(theme, 'Grid.Container')

        return (
            <ContainerBase className={classNames('containers', className)} {...props} ref={ref}>
                {children}
            </ContainerBase>
        )
    },
)

type ContainerRef = HTMLDivElement

interface ContainerProps extends BackyardBaseProps<ContainerRef> {}

Container.bdsName = 'Container'

export { Container }

export type { ContainerProps, ContainerRef }

export default Container
