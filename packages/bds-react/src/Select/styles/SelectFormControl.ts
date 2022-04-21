import styled from 'styled-components'

const SelectLabel = styled.div`
    position: relative;
    height: 48px;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover fieldset {
        border-color: var(--bds-color-border-interactive);
    }

    &:focus fieldset {
        border-color: var(--bds-color-border-interactive);
        border-width: var(--bds-sizes-size-2);
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
        path, circle {
            fill: var(--bds-color-icon-tertiary);
        }

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

    &.size--small {
        height: var(--bds-sizes-size-40);

        svg.icon {
            height: 14px;
            width: 14px;
        }
        
        .suffix {
            font-size: var(--bds-sizes-size-14);
        }
    }

    &.size--large {
        height: var(--bds-sizes-size-56);
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
            font-size: var(--bds-sizes-size-24);
            line-height: var(--bds-sizes-size-32);
        }
    }

    svg.icon--error + .suffix,
    svg.icon--success + .suffix {
        margin-left: var(--bds-sizes-size-8);
    }
`

export { SelectLabel }
export default SelectLabel