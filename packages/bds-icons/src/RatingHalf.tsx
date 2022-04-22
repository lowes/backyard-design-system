import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const RatingHalf: React.MemoExoticComponent<React.ForwardRefExoticComponent<RatingHalfProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.8713 13.8962c.2319-.1752.2827-.4636.1414-.8707L10.831 9.503l3.0193-2.1655c.3505-.2488.4919-.5146.4014-.7916-.0905-.277-.3562-.4127-.7916-.4071l-3.7034.0283-1.1252-3.5395C8.4958 2.215 8.2923 2 7.9983 2c-.2884 0-.492.2149-.6276.6276L6.2455 6.1671l-3.7034-.0283c-.4354-.0057-.7011.13-.7916.4071-.0961.277.0509.5428.4014.7916L5.1712 9.503l-1.1817 3.5225c-.1413.4071-.0905.6955.1414.8707.2318.181.5258.1188.8764-.1357l2.991-2.1994 2.9966 2.1994c.3506.2545.639.3167.8764.1357Zm-.865-1.1251L8.2866 10.696c-.0904-.0735-.1866-.1131-.2883-.1074v-7.209c.017 0 .0282.0113.0339.0452l.9838 3.2738c.0735.2318.2205.3222.4523.3166l3.4208-.0566c.0339 0 .0452 0 .0509.017.0056.0113-.0057.0226-.0283.0396l-2.8158 1.945c-.1979.1357-.243.3166-.164.5371l1.1252 3.2285c.0057.034.0114.0396 0 .0566-.0113.0113-.0282.0056-.0508-.0113Z" clipRule="evenodd" />
, 
    'RatingHalf'
)

type RatingHalfRef = PathIconRef

type RatingHalfProps = PathIconProps

export {
    RatingHalf
}

export type {
    RatingHalfRef,
    RatingHalfProps
}

export default RatingHalf
