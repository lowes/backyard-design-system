import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PhoneFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<PhoneFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.288 14c.835 0 1.5664-.2908 2.1554-.937.343-.3813.5566-.8271.5566-1.2666 0-.3231-.123-.6332-.4272-.8529l-1.987-1.4088c-.3042-.2068-.5567-.3101-.7897-.3101-.2912 0-.5566.168-.8543.4588l-.4596.4523a.349.349 0 0 1-.246.1034c-.097 0-.1941-.0388-.2589-.0711-.4012-.2132-1.0873-.8013-1.7281-1.4346-.6343-.6332-1.2233-1.3182-1.4304-1.7189-.0324-.071-.0712-.1615-.0712-.2584 0-.084.0259-.168.097-.2391l.4596-.4718c.2848-.2972.4596-.5557.4596-.853 0-.2326-.11-.4846-.3237-.7883l-1.3916-1.958C4.822 2.1357 4.505 2 4.1553 2c-.4271 0-.8673.1939-1.2492.5622C2.2783 3.1632 2 3.9063 2 4.727c0 1.8546 1.4175 4.1034 3.288 5.9644C7.1586 12.559 9.4304 14 11.288 14Z" clipRule="evenodd" />
, 
    'PhoneFilled'
)

type PhoneFilledRef = PathIconRef

type PhoneFilledProps = PathIconProps

export {
    PhoneFilled
}

export type {
    PhoneFilledRef,
    PhoneFilledProps
}

export default PhoneFilled
