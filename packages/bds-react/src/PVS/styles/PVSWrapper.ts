import styled, { css } from 'styled-components'
import SwatchBase from './SwatchBase'

/** Styles for the basic hover, focus and checked state of the PVS input */
const InputStates = css`
    &:hover + .radio-indicator,
    &.hover + .radio-indicator {
        border-color: var(--bds-color-action-interactive);
        cursor: pointer;
    }

    &:focus + .radio-indicator,
    &.focus + .radio-indicator {
        box-shadow: 0 0 0 2px var(--bds-color-action-interactive);
        border: none;
        outline: none;
    }

    &:checked + .radio-indicator {
        box-shadow: 0 0 0 2px var(--bds-color-border-default);
        border: none;

        .swatch {
            border: 1px solid var(--bds-color-border-subdued);
        }
    }

    &:checked:focus + .radio-indicator,
    &:checked.focus + .radio-indicator {
        border: none;
        box-shadow: 0 0 0 2px var(--bds-color-action-interactive);

        .swatch {
            border: 1px solid var(--bds-color-border-subdued);
        }
    }

    &:not(:checked) + .radio-indicator {
        .selected-badge {
            display: none;
        }
    }
`

/** Styles for states when the `unavailable` attribute is true */
const UnavailableState = css`
    &.unavailable {
        .radio-indicator,
        input:focus + .radio-indicator,
        input.focus + .radio-indicator {
            border: 1px dashed var(--bds-color-text-disabled);
        }

        input:hover + .radio-indicator,
        input.hover + .radio-indicator {
            border-color: var(--bds-color-text-disabled);
        }

        input:checked + .radio-indicator {
            border: none;
            .swatch {
                border: 1px dashed var(--bds-color-text-disabled);
            }
        }
    }
`

/** Overrides for the PVS radio input */
const RadioOverrides = css`
    .pvs-input {
        height: 100%;
        width: 100%;
        border-radius: 100%;

        input {
            border-radius: 100%;

            ${InputStates}
        }

        .radio-indicator {
            height: 100%;
            width: 100%;
            border-radius: 100%;
            border: 1px solid var(--bds-color-text-disabled);

            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;

            &:before,
            &:after {
                visibility: hidden;
            }

            ${SwatchBase}
        }

        ${UnavailableState}
    }
`

const PVSWrapper = styled.div`
    height: var(--bds-sizes-size-40);
    width: var(--bds-sizes-size-40);

    ${RadioOverrides}
`

export { PVSWrapper }

export default PVSWrapper
