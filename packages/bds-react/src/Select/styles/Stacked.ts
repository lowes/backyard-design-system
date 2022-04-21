import { css } from 'styled-components'

const Stacked = css`
    label.input-label.incomplete,
    label.input-label.interaction--completed,
    label.input-label.interaction--active,
    label.input-label.completed,
    label.input-label.interaction--focused {
        top: var(--bds-sizes-size-12);
        left: var(--bds-sizes-size-16);
        font-size: var(--bds-sizes-size-16);

        &.size--small {
            top: var(--bds-sizes-size-8);
        }

        &.size--large {
            top: var(--bds-sizes-size-16);
        }

        &.size--jumbo {
            top: var(--bds-sizes-size-20);
            font-size: var(--bds-sizes-size-20);
        }
    }

    .text-input-fieldset legend {
        max-width: 0.01px;
        padding: 0;
    }

    select {
        opacity: 0;
    }

    .input-label {
        font-weight: var(--bds-font-weight-semibold);
        color: var(--bds-color-text-primary);

        .select--value {
            margin-left: var(--bds-sizes-size-8);
            color: var(--bds-color-text-primary);
            font-weight: var(--bds-font-weight-regular);
        }

        &.state--error {
            color: var(--bds-color-text-red);
        }
    }
`

export { Stacked }
export default Stacked