import styled from 'styled-components'

const TextInputLabel = styled.label`
    z-index: 1;
    pointer-events: none;
    top: 12px;
    left: 16px;
    position: absolute;
    display: block;
    color: var(--bds-color-text-tertiary);
    padding: 0;
    font-size: var(--bds-sizes-size-16);
    line-height: var(--bds-sizes-size-24);
    font-weight: var(--bds-font-weight-regular);
    transition: all 0.15s ease-out;

    &.with-icon-before {
        left: 40px;
    }

    &.interaction--focused, 
    &.interaction--active,
    &.interaction--completed,
    &.completed  {
        top: -12px;
        left: 18px;
        font-size: var(--bds-sizes-size-14);
        color: var(--bds-color-text-interactive);
    }

    &.interaction--completed {
        color: var(--bds-color-text-tertiary);
    }

    &.size--small {
        top: 8px;
        font-size: var(--bds-sizes-size-14);

        &.interaction--focused, 
        &.interaction--active,
        &.interaction--completed,
        &.completed {
            top: -12px;
            left: 18px;
            font-size: var(--bds-sizes-size-12);
        }
    }

    &.size--large {
        top: 16px;

        &.interaction--focused, 
        &.interaction--active,
        &.interaction--completed,
        &.completed  {
            top: -12px;
            left: 21px;
        }
    }

    &.size--jumbo {
        font-size: var(--bds-sizes-size-24);
        top: 20px;

        &.interaction--focused, 
        &.interaction--active,
        &.interaction--completed,
        &.completed  {
            font-size: var(--bds-sizes-size-20);
            top: -12px;
            left: 21px;
        }
    }

    &.state--error {
        color: var(--bds-color-text-red);
    }

    &.hidden-label {
        opacity: 0;
    }
`

export { TextInputLabel }
export default TextInputLabel
