import styled, { css } from 'styled-components'

import { TypographyBase } from '../styles/TypographyBase'
import type { TypographyProps } from '../Typography'

import type { CaptionProps } from './Caption'

export const CaptionBase = css<CaptionProps & TypographyProps>`
    ${TypographyBase}

    font-family: ${({ theme }) => theme.font.family[theme.context.caption]};
    font-weight: var(--bds-font-weight-regular);
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};
`

export const CaptionRegular = styled.span`
    ${CaptionBase}

    font-size: var(--bds-font-tag-caption-mobile-font-size);
    line-height: var(--bds-font-tag-caption-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-caption-desktop-font-size);
        line-height: var(--bds-font-tag-caption-desktop-line-height);
    }
`
