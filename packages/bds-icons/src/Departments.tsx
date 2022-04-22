import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Departments: React.MemoExoticComponent<React.ForwardRefExoticComponent<DepartmentsProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.0443 4.5655c.1735 0 .314-.1958.314-.4449 0-.2491-.1405-.4508-.314-.4508H2.3099c-.1736 0-.3099.2017-.3099.4508 0 .2492.1363.4449.3099.4449h7.7344Zm3.5049 2.5862c.2491 0 .4508-.1957.4508-.4448 0-.2551-.2017-.4568-.4508-.4568H2.4449c-.2492 0-.4449.2017-.4449.4568 0 .2491.1957.4448.4449.4448h11.1043ZM10.0443 9.744c.1735 0 .314-.2016.314-.4567 0-.2491-.1405-.4449-.314-.4449H2.3099c-.1736 0-.3099.1958-.3099.4449 0 .255.1363.4567.3099.4567h7.7344Zm3.5049 2.5863c.2491 0 .4508-.2017.4508-.4567 0-.2492-.2017-.4449-.4508-.4449H2.4449A.4405.4405 0 0 0 2 11.8735c0 .255.1957.4567.4449.4567h11.1043Z" clipRule="evenodd" />
, 
    'Departments'
)

type DepartmentsRef = PathIconRef

type DepartmentsProps = PathIconProps

export {
    Departments
}

export type {
    DepartmentsRef,
    DepartmentsProps
}

export default Departments
