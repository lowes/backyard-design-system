import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Sort: React.MemoExoticComponent<React.ForwardRefExoticComponent<SortProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.5939 12.7944c.1218 0 .2386-.0457.3401-.1472l2.9289-2.9848c.0863-.0863.1371-.2182.1371-.33 0-.269-.1827-.4517-.4467-.4517-.132 0-.2284.0457-.3096.127l-1.4264 1.4618-.8224.9594.0508-1.1878V3.6574c0-.264-.1878-.4518-.4518-.4518s-.4568.1878-.4568.4518v6.5837l.0558 1.1878-.8223-.9594L7.939 9.0076c-.0762-.0812-.1777-.1269-.3097-.1269-.2588 0-.4467.1828-.4467.4518 0 .1117.0559.2436.1422.33l2.9289 2.9847c.0965.1015.2132.1472.3401.1472Zm-5.1827 0c.264 0 .4517-.1878.4517-.4518V5.7589L5.8122 4.571l.8223.9594L8.061 6.9924c.0812.0812.1777.1269.3097.1269.264 0 .4467-.1827.4467-.4518 0-.1117-.0508-.2436-.1422-.33l-2.929-2.9847c-.0964-.1015-.2131-.1472-.335-.1472-.1268 0-.2436.0457-.34.1472L2.142 6.3376c-.0863.0863-.1421.2182-.1421.33 0 .269.1827.4517.4467.4517.132 0 .2335-.0457.3096-.127l1.4315-1.4618.8224-.9594-.0559 1.1878v6.5837c0 .264.193.4518.4569.4518Z" clipRule="evenodd" />
, 
    'Sort'
)

type SortRef = PathIconRef

type SortProps = PathIconProps

export {
    Sort
}

export type {
    SortRef,
    SortProps
}

export default Sort
