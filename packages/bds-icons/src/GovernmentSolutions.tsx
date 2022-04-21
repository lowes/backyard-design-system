import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const GovernmentSolutions: React.MemoExoticComponent<React.ForwardRefExoticComponent<GovernmentSolutionsProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M2.7967 6.9296H13.469c.5172 0 .694-.6894.2406-.9383L8.3735 3.0617a.5.5 0 0 0-.4813 0L2.5561 5.9913c-.4535.249-.2767.9383.2406.9383Zm1.086-.7h8.5002l-4.25-2.3-4.2501 2.3Z" clipRule="evenodd" /><path fillRule="evenodd" d="M7.5 8.4296a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3ZM2 13.4296a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5ZM11.5 7.9296a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5ZM4 8.4296a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z" /></React.Fragment>
, 
    'GovernmentSolutions'
)

type GovernmentSolutionsRef = PathIconRef

type GovernmentSolutionsProps = PathIconProps

export {
    GovernmentSolutions
}

export type {
    GovernmentSolutionsRef,
    GovernmentSolutionsProps
}

export default GovernmentSolutions
