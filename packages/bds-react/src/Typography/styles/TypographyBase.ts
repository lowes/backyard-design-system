import styled, { css } from 'styled-components'

import type { TypographyProps } from '../Typography'

const TypographyBase = css<TypographyProps>`
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};
    margin: 0;

    ${({ theme, marginBottom }) => (marginBottom ? `margin-bottom: ${theme.sizes[marginBottom]};` : null)};

    &.align--left {
        text-align: left;
    }
    &.align--center {
        text-align: center;
    }
    &.align--right {
        text-align: right;
    }

    &.display--block {
        display: block;
    }
    &.display--inline {
        display: inline;
    }

    b,
    bold,
    strong {
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: ${
            ({ theme }) => (theme.context.font === 'roboto')
                ? theme.font.weight.medium
                : theme.font.weight.semibold}
    }

    &.bold {
        font-weight: ${
            ({ theme }) => (theme.context.font === 'roboto')
                ? theme.font.weight.medium
                : theme.font.weight.semibold}
    }
`

const Label = styled.span<TypographyProps>`
    font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
    font-weight: var(--bds-font-weight-regular);
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};

    font-size: var(--bds-font-tag-label-mobile-font-size);
    line-height: var(--bds-font-tag-label-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.md.max}) {
        font-size: var(--bds-font-tag-label-desktop-font-size);
        line-height: var(--bds-font-tag-label-desktop-line-height);
    }
`

const FormHelperText = styled.span<TypographyProps>`
    font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
    font-weight: var(--bds-font-weight-regular);
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};

    font-size: var(--bds-font-tag-helper-text-mobile-font-size);
    line-height: var(--bds-font-tag-helper-text-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.md.max}) {
        font-size: var(--bds-font-tag-helper-text-desktop-font-size);
        line-height: var(--bds-font-tag-helper-text-desktop-line-height);
    }
`

const Overline = styled.span<TypographyProps>`
    font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
    font-weight: var(--bds-font-weight-regular);
    color: ${({ theme, color }) => theme.color[color] || theme.color.text_primary};

    font-size: var(--bds-font-tag-overline-mobile-font-size);
    line-height: var(--bds-font-tag-overline-mobile-line-height);

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.md.max}) {
        font-size: var(--bds-font-tag-overline-desktop-font-size);
        line-height: var(--bds-font-tag-overline-desktop-line-height);
    }
`

export { TypographyBase, Label, FormHelperText, Overline }
