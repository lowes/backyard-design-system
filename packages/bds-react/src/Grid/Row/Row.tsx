import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { GridRow as RowBase } from '../styles/GridStyles'
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider'

const Row: BDSForwardRef<RowProps> = React.forwardRef<RowRef, RowProps>(function Row(
    { className, children, ...props },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Grid.Row')

    return (
        <RowBase className={classNames('row', className)} {...props} ref={ref}>
            {children}
        </RowBase>
    )
})

type RowRef = HTMLDivElement

interface RowProps extends BackyardBaseProps<RowRef> {}

Row.bdsName = 'Row'

export { Row }

export { RowProps, RowRef }

export default Row
