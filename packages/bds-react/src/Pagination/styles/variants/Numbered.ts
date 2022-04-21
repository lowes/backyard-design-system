import { css } from 'styled-components'

const Numbered = css`
    & > ul {
        & > li {
            padding: ${({ theme }) => `0 ${theme.sizes.size_8}`};

            &:first-child,
            &:last-child {
                padding: 0;
            }
        }

        .button {
            width: calc(${({ theme }) => theme.sizes.size_40} + ${({ theme }) => theme.sizes.size_6});
            height: calc(${({ theme }) => theme.sizes.size_40} + ${({ theme }) => theme.sizes.size_6});

            transition: 0s padding ease-in-out;

            &.ellipsis {
                padding-top: ${({ theme }) => theme.sizes.size_16};
                padding-bottom: ${({ theme }) => theme.sizes.size_8};

                svg {
                    width: ${({ theme }) => theme.sizes.size_12} !important;
                    height: ${({ theme }) => theme.sizes.size_12} !important;
                }
            }
        }
    }
`

export {
    Numbered
}

export default Numbered
