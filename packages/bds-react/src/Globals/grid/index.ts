import { css } from 'styled-components'
import Containers from './Containers'
import GridTemplateColumns from './GridTemplateColumns'
import { GridCols, GridColsStart, GridColsEnd } from './GridColumns'
import GridTemplateRows from './GridTemplateRows'
import { GridRows, GridRowsStart, GridRowsEnd } from './GridRows'
import { AutoFlow, AutoRows, AutoColumns } from './GridAuto'
import { JustifyContent, JustifyItems, JustifySelf } from './Justify'
import { AlignContent, AlignItems, AlignSelf } from './Align'
import { PlaceContent, PlaceItems, PlaceSelf } from './Place'

const Gridv3 = css`
    ${Containers}
    ${GridTemplateColumns}
    ${GridCols}
    ${GridColsStart}
    ${GridColsEnd}
    ${GridTemplateRows}
    ${GridRows}
    ${GridRowsStart}
    ${GridRowsEnd}
    ${AutoFlow}
    ${AutoRows}
    ${AutoColumns}
    ${JustifyContent}
    ${JustifyItems}
    ${JustifySelf}
    ${AlignContent}
    ${AlignItems}
    ${AlignSelf}
    ${PlaceContent}
    ${PlaceItems}
    ${PlaceSelf}
`

export { Gridv3 }
export default Gridv3