import * as React from 'react'

import MenuPopoverContext from './MenuPopoverContext'

const useMenuPopover = () => {
    return React.useContext(MenuPopoverContext)
}

export {
    useMenuPopover
}

export default useMenuPopover
