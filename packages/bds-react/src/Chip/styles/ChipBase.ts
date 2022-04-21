import styled from 'styled-components'

const ChipBase = styled.span`
    && {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    input {
        box-sizing: border-box;
        border: none;
        position: absolute;
        opacity: 0;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        width: 100%;
        height: 100%;

        cursor: pointer;
        padding: 0;
    }

    input:disabled,
    input:disabled + label {
        pointer-events: none;
    }

    input:disabled:before {
        content: "";
        position: absolute;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: 1;

        cursor: not-allowed;
        pointer-events: all;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        /** Fonts */
        font-size: var(--bds-sizes-size-14);
        line-height: var(--bds-sizes-size-20);
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: var(--bds-font-weight-regular);

        @media only screen and (min-width: var(--bds-grid-breakpoint-md-max)) {
            font-size: var(--bds-sizes-size-16);
        }

        /** Border */
        border-width: var(--bds-sizes-size-1);
        border-style: solid;
        border-radius: var(--bds-border-radius-circle);

        /** Spacing */
        padding: 0 var(--bds-sizes-size-14);
        height: var(--bds-sizes-size-40);

        /** Icon */
        .chip--icon {
            margin-right: var(--bds-sizes-size-8);
        }

        /** Delete */
        .chip--delete {
            margin-left: var(--bds-sizes-size-8);
        }

        /** Effects */
        transition: 0.2s all ease-in-out;
    }

    /** Outlined:enabled */
    input.enabled + label,
    input:enabled + label {
        /** Background */
        background-color: transparent;
        /** Border */
        border-color: var(--bds-color-border-default);

        /** Label */
        .label {
            color: var(--bds-color-text-primary);
        }

        /** Icons */
        .icon path {
            fill: var(--bds-color-icon-primary);
        }
    }

    /** Outlined:hover */
    input.hover + label,
    input:hover:not(:disabled):not(:checked) + label,
    input:not(:disabled):not(:checked) + label:hover {
        /** Background color */
        background-color: var(--bds-color-action-neutral-hover);
        /** Border */
        border-color: var(--bds-color-border-interactive);

        /** Label */
        /* .label {
            color: ${({ theme }) => theme.color.text_primary};
        } */

        /** Icons */
        /* .icon path {
            fill: ${({ theme }) => theme.color.text_secondary};
        } */
    }

    /** Outlined:focus */
    input.focus + label,
    input:focus + label {
        /** Border */
        border-color: var(--bds-color-border-interactive);

        /** Outline */
        box-shadow: 0 0 0 2px var(--bds-color-border-interactive);
    }

    /** Outlined:checked */
    input.checked + label,
    input:checked + label {
        background-color: var(--bds-color-action-interactive);
        border-color: var(--bds-color-action-interactive);
        
        .label {
            color: var(--bds-color-text-primary-inverse);
        }
        
        .icon path {
            fill: var(--bds-color-icon-primary-inverse);
        }

        &.subdued {
            background-color: var(--bds-color-action-interactive-subdued-pressed);
            border-color: var(--bds-color-action-interactive-subdued-pressed);

            .label {
                color: var(--bds-color-text-primary);
            }

            .icon path {
                fill: var(--bds-color-icon-primary);
            }
        }
    }

    /** Outlined:disabled */
    input.disabled + label,
    input:disabled + label {
        /** Border */
        border-color: var(--bds-color-border-disabled);

        /** Label */
        .label {
            color: var(--bds-color-text-disabled);
        }

        /** Icon */
        .icon path {
            fill: var(--bds-color-icon-disabled);
        }
    }
`

export default ChipBase
