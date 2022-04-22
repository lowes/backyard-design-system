import styled, { css } from 'styled-components'

import { TypographyBase } from '../styles/TypographyBase'
import type { TypographyProps } from '../Typography'

import type { HeadingProps } from './Heading'

export const RegularFontWeight = css`
    font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
    font-weight: var(--bds-font-weight-regular);
`

export const BoldFontWeight = css`
    font-family: ${({ theme }) => theme.font.family[theme.context.heading]};
    font-weight: ${({ theme }) =>
        theme.context.font === 'roboto'
            ? theme.font.weight.medium
            : theme.font.weight.semibold};
`

export const HeadingBase = css<HeadingProps & TypographyProps>`
    ${TypographyBase}
    
    ${({ regular }) => (regular ? RegularFontWeight : BoldFontWeight)}
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};

    letter-spacing: ${({ theme }) =>
        theme.context.font === 'fellix'
            ? '20%' : 'normal'
    };
`

export const H1 = styled.h1`
    ${HeadingBase}

    font-size: var(--bds-font-tag-h1-mobile-font-size);
    line-height: var(--bds-font-tag-h1-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-h1-desktop-font-size);
        line-height: var(--bds-font-tag-h1-desktop-line-height);
    }
`

export const H2 = styled.h2`
    ${HeadingBase}

    font-size: var(--bds-font-tag-h2-mobile-font-size);
    line-height: var(--bds-font-tag-h2-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-h2-desktop-font-size);
        line-height: var(--bds-font-tag-h2-desktop-line-height);
    }
`

export const H3 = styled.h3`
    ${HeadingBase}

    font-size: var(--bds-font-tag-h3-mobile-font-size);
    line-height: var(--bds-font-tag-h3-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-h3-desktop-font-size);
        line-height: var(--bds-font-tag-h3-desktop-line-height);
    }
`

export const H4 = styled.h4`
    ${HeadingBase}

    font-size: var(--bds-font-tag-h4-mobile-font-size);
    line-height: var(--bds-font-tag-h4-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-h4-desktop-font-size);
        line-height: var(--bds-font-tag-h4-desktop-line-height);
    }
`

export const H5 = styled.h5`
    ${HeadingBase}

    font-size: var(--bds-font-tag-h5-mobile-font-size);
    line-height: var(--bds-font-tag-h5-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-h5-desktop-font-size);
        line-height: var(--bds-font-tag-h5-desktop-line-height);
    }
`


export const H6 = styled.h6`
    ${HeadingBase}

    font-size: var(--bds-font-tag-h6-mobile-font-size);
    line-height: var(--bds-font-tag-h6-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        font-size: var(--bds-font-tag-h6-desktop-font-size);
        line-height: var(--bds-font-tag-h6-desktop-line-height);
    }
`
