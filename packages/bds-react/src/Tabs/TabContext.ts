import * as React from 'react'

const TabContext = React.createContext({
    selected: 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleClick: (index: number, event: React.MouseEvent | React.KeyboardEvent) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleKeyDown: (index: number, event: React.KeyboardEvent) => {},
    isOnLayer: false
})

export default TabContext
