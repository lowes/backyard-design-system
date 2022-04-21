import styled, { css } from 'styled-components'

import type { TextPickerProps } from '../TextPicker'

const EnabledNative = css`
    input::-webkit-calendar-picker-indicator {
        opacity: 0;

        cursor: pointer;

        margin-top: -${({ theme }) => theme.sizes.size_18};
        margin-right: -${({ theme }) => theme.sizes.size_40};

        height: ${({ theme }) => theme.sizes.size_32};
        width: ${({ theme }) => theme.sizes.size_32};
    }
`

const DisabledNative = css`
    input::-webkit-calendar-picker-indicator {
        display: none;
    }
`

const BrowserCSS = css<TextPickerProps>`
    input::-webkit-inner-spin-button,
    input::-webkit-clear-button,
    input::-ms-clear {
        display: none;
    }

    input::-moz-placeholder {
        opacity: 1;
        color: black;
    }

    input::-webkit-input-placeholder {
        opacity: 1;
        color: black;
    }

    input:-ms-input-placeholder {
        opacity: 1;
        color: black;
    }

    ${({ disableNative, theme }) =>
        disableNative || theme.isDesktop ? DisabledNative : EnabledNative};
`

const TextPickerWrapper = styled.div`
    width: calc(${({ theme }) => theme.sizes.size_60} * 5);

    select {
        height: auto;
        margin-bottom: ${({ theme }) => theme.sizes.size_8};
    }

    .textinput--wrapper input.incomplete:not(.focus):not(:focus) {
        opacity: 0;
    }

    .no-interaction {
        pointer-events: none;
    }

    &&& {
        .icon--after,
        &.icon--after {
            display: flex;
            align-items: center;
            justify-content: center;

            z-index: 1;

            .picker-clear-button,
            &.picker-clear-button {
                height: ${({ theme }) => theme.sizes.size_40};
                width: ${({ theme }) => theme.sizes.size_40};

                padding: ${({ theme }) => theme.sizes.size_0};

                z-index: 1;
                pointer-events: all;

                .icon.icon.icon {
                    path {
                        fill: ${({ theme }) => theme.color.text_tertiary};
                    }
                }
            }

            &.picker-clear-button {
                margin-right: ${({ theme }) => theme.sizes.size_10};
            }
        }
    }

    ${BrowserCSS}
`

export { TextPickerWrapper }

export default TextPickerWrapper
