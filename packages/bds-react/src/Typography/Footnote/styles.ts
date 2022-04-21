import styled, { css } from 'styled-components'

import { TypographyBase } from '../styles/TypographyBase'
import type { TypographyProps } from '../Typography'

import type { FootnoteProps } from './Footnote'

export const FootnoteBase = css<FootnoteProps & TypographyProps>`
    ${TypographyBase}

    font-family: ${({ theme }) => theme.font.family[theme.context.caption]};
    font-weight: var(--bds-font-weight-regular);
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};
`

export const FootnoteRegular = styled.span`
    ${FootnoteBase}

    font-size: var(--bds-font-tag-footnote-mobile-font-size);
    line-height: var(--bds-font-tag-footnote-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-footnote-desktop-font-size);
        line-height: var(--bds-font-tag-footnote-desktop-line-height);
    }
`
