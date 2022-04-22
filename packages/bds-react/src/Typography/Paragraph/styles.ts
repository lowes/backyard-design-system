import styled, { css } from 'styled-components'

import { TypographyBase } from '../styles/TypographyBase'
import type { TypographyProps } from '../Typography'

import type { ParagraphProps } from './Paragraph'

export const ParagraphBase = css<TypographyProps>`
    ${TypographyBase}

    font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
    font-weight: var(--bds-font-weight-regular);
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};
`

export const ParagraphRegular = styled.p<ParagraphProps & TypographyProps>`
    ${ParagraphBase}

    &&&.body_1 {
        font-size: var(--bds-font-tag-body-1-mobile-font-size);
        line-height: var(--bds-font-tag-body-1-mobile-line-height);
    }

    &&&.body_2 {
        font-size: var(--bds-font-tag-body-2-mobile-font-size);
        line-height: var(--bds-font-tag-body-2-mobile-line-height);
    }

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        &&&.body_1 {
            font-size: var(--bds-font-tag-body-1-desktop-font-size);
            line-height: var(--bds-font-tag-body-1-desktop-line-height);
        }

        &&&.body_2 {
            font-size: var(--bds-font-tag-body-2-desktop-font-size);
            line-height: var(--bds-font-tag-body-2-desktop-line-height);
        }
    }
`
