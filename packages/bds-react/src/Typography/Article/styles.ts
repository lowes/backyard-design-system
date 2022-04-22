import styled, { css } from 'styled-components'

import { TypographyBase } from '../styles/TypographyBase'
import type { TypographyProps } from '../Typography'

import type { ArticleProps } from './Article'

export const ArticleBase = css<ArticleProps & TypographyProps>`
    ${TypographyBase}

    font-family: ${({ theme }) => theme.font.family[theme.context.article]};
    font-weight: var(--bds-font-weight-regular);
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};
`

export const ArticleRegular = styled.p`
    ${ArticleBase}

    font-size: var(--bds-font-tag-article-mobile-font-size);
    line-height: var(--bds-font-tag-article-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-article-desktop-font-size);
        line-height: var(--bds-font-tag-article-desktop-line-height);
    }
`
