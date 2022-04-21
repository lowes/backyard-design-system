import * as React from 'react'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import { ArticleRegular } from './styles'

/**
 * Backyard React Article
 *
 * Internal Component for Typography
 */
const Article: BDSForwardRef<ArticleProps> = React.forwardRef<
    ArticleRef,
    ArticleProps
>(function Article({ children, ...props }, ref) {
    return (
        <ArticleRegular {...props} ref={ref}>
            {children}
        </ArticleRegular>
    )
})

type ArticleRef = HTMLParagraphElement

interface ArticleProps extends BackyardBaseProps<ArticleRef> {}

Article.bdsName = 'Article'

export { Article }

export type { ArticleProps, ArticleRef }

export default Article
