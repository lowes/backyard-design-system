import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Menu: React.MemoExoticComponent<React.ForwardRefExoticComponent<MenuProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.5492 5.8586c.2491 0 .4508-.1957.4508-.4449a.4506.4506 0 0 0-.4508-.4508H2.4449c-.2492 0-.4449.2017-.4449.4508 0 .2492.1957.445.4449.445h11.1043Zm0 2.5863C13.7983 8.4449 14 8.249 14 8c0-.255-.2017-.4568-.4508-.4568H2.4449C2.1957 7.5432 2 7.745 2 8c0 .2491.1957.4449.4449.4449h11.1043Zm0 2.5922c.2491 0 .4508-.2017.4508-.4568 0-.2491-.2017-.4449-.4508-.4449H2.4449A.4406.4406 0 0 0 2 10.5803c0 .2551.1957.4568.4449.4568h11.1043Z" clipRule="evenodd" />
, 
    'Menu'
)

type MenuRef = PathIconRef

type MenuProps = PathIconProps

export {
    Menu
}

export type {
    MenuRef,
    MenuProps
}

export default Menu
