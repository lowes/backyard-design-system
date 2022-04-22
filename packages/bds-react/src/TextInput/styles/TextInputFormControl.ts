import styled from 'styled-components'

const TextInputFormControl = styled.div`
    position: relative;
    height: 48px;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover:not(.disabled) fieldset {
        border-color: var(--bds-color-border-interactive);
    }

    &:focus fieldset {
        border-color: var(--bds-color-border-interactive);
        border-width: var(--bds-sizes-size-2);
    }

    &.disabled fieldset {
        border-color: var(--bds-color-border-disabled);
    }

    &.state--error {
        fieldset {
            border-color: var(--bds-color-border-red);
        }
        svg.icon--before {
            path, circle {
                fill: var(--bds-color-icon-red);
            }
        }
    }

    &.state--error:focus fieldset {
        border-color: var(--bds-color-border-red);
        border-width: var(--bds-sizes-size-2);
    }

    svg.icon {
        height: var(--bds-sizes-size-16);
        width: var(--bds-sizes-size-16);

        &.icon--success {
            path, circle {
                fill: var(--bds-color-icon-green);
            }
        }

        &.icon--error {
            path, circle {
                fill: var(--bds-color-icon-red);
            }
        }
    }

    .suffix {
        border-radius: var(--bds-border-radius-lg);
        color: var(--bds-color-text-tertiary);
        height: 100%;
        padding: 0 var(--bds-sizes-size-16);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bds-color-surface-subdued);
        font-size: var(--bds-sizes-size-16);
    }

    &.size--small {
        height: var(--bds-sizes-size-40);

        svg.icon {
            height: var(--bds-sizes-size-14);
            width: var(--bds-sizes-size-14);
        }

        input, textarea {
            font-size: var(--bds-sizes-size-14);
            line-height: var(--bds-sizes-size-24);
        }
        
        .suffix {
            font-size: var(--bds-sizes-size-14);
        }
    }

    &.size--large {
        height: var(--bds-sizes-size-56);

        input, textarea {
            font-size: var(--bds-sizes-size-18);
            line-height: var(--bds-sizes-size-24);
        }
    }

    &.size--jumbo {
        height: var(--bds-sizes-size-64);
        
        svg.icon {
            height: 20px;
            width: 20px;
        }

        .suffix {
            font-size: var(--bds-sizes-size-24)
        }

        input, textarea {
            font-size: var(--bds-sizes-size-20);
            line-height: var(--bds-sizes-size-32);
        }
    }

    svg.icon--error + .suffix,
    svg.icon--success + .suffix {
        margin-left: var(--bds-sizes-size-8);
    }
`

export { TextInputFormControl }
export default TextInputFormControl