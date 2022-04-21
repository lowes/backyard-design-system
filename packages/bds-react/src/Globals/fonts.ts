import { css } from 'styled-components'

const Fonts = css`
    h1, h2, h3, h4, h5, h6, p, .body-small,
    article, .caption, .footnote, span, a {
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: var(--bds-font-weight-regular);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: ${
            ({ theme }) => (theme.context.font === 'roboto')
                ? theme.font.weight.medium
                : theme.font.weight.semibold}
    }

    h1 {
        font-size: var(--bds-font-tag-h1-mobile-font-size);
        line-height: var(--bds-font-tag-h1-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-h1-desktop-font-size);
            line-height: var(--bds-font-tag-h1-desktop-line-height);
        }
    }

    h2 {
        font-size: var(--bds-font-tag-h2-mobile-font-size);
        line-height: var(--bds-font-tag-h2-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-h2-desktop-font-size);
            line-height: var(--bds-font-tag-h2-desktop-line-height);
        }
    }

    h3 {
        font-size: var(--bds-font-tag-h3-mobile-font-size);
        line-height: var(--bds-font-tag-h3-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-h3-desktop-font-size);
            line-height: var(--bds-font-tag-h3-desktop-line-height);
        }
    }

    h4 {
        font-size: var(--bds-font-tag-h4-mobile-font-size);
        line-height: var(--bds-font-tag-h4-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-h4-desktop-font-size);
            line-height: var(--bds-font-tag-h4-desktop-line-height);
        }
    }

    h5 {
        font-size: var(--bds-font-tag-h5-mobile-font-size);
        line-height: var(--bds-font-tag-h5-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-h5-desktop-font-size);
            line-height: var(--bds-font-tag-h5-desktop-line-height);
        }
    }

    h6 {
        font-size: var(--bds-font-tag-h6-mobile-font-size);
        line-height: var(--bds-font-tag-h6-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-h6-desktop-font-size);
            line-height: var(--bds-font-tag-h6-desktop-line-height);
        }
    }

    p, .body_1 {
        font-size: var(--bds-font-tag-body-1-mobile-font-size);
        line-height: var(--bds-font-tag-body-1-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-body-1-desktop-font-size);
            line-height: var(--bds-font-tag-body-1-desktop-line-height);
        }
    }

    .body_2 {
        font-size: var(--bds-font-tag-body-2-mobile-font-size);
        line-height: var(--bds-font-tag-body-2-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-body-2-desktop-font-size);
            line-height: var(--bds-font-tag-body-2-desktop-line-height);
        }
    }

    article,
    .article {
        font-size: var(--bds-font-tag-article-mobile-font-size);
        line-height: var(--bds-font-tag-article-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-article-desktop-font-size);
            line-height: var(--bds-font-tag-article-desktop-line-height);
        }
    }

    .caption {
        font-size: var(--bds-font-tag-caption-mobile-font-size);
        line-height: var(--bds-font-tag-caption-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-caption-desktop-font-size);
            line-height: var(--bds-font-tag-caption-desktop-line-height);
        }
    }

    .footnote {
        font-size: var(--bds-font-tag-footnote-mobile-font-size);
        line-height: var(--bds-font-tag-footnote-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-footnote-desktop-font-size);
            line-height: var(--bds-font-tag-footnote-desktop-line-height);
        }
    }

    .overline {
        font-size: var(--bds-font-tag-overline-mobile-font-size);
        line-height: var(--bds-font-tag-footnote-mobile-line-height);

        @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
            font-size: var(--bds-font-tag-overline-desktop-font-size);
            line-height: var(--bds-font-tag-footnote-desktop-line-height);
        }
    }
`

export { Fonts }
export default Fonts