import styled, { css } from 'styled-components'
import type { DropdownProps } from '../Dropdown'

const Shapes = css`
    &.shape {
        &--rounded {
            border-radius: var(--bds-border-radius-lg);
        }

        &--squared {
            border-radius: 0;
        }
    }
`

const DropdownWrapper = styled.div<{ maxHeight?: DropdownProps['maxHeight'] }>`
    position: relative;

    label.completed {
        top: -12px;
        left: 16px;
        font-size: var(--bds-sizes-size-14);

        &.size--small {
            top: -12px;
            left: 16px;
            font-size: var(--bds-sizes-size-12);
        }

        &.size--large {
            top: -12px;
        }

        &.size--jumbo {
            font-size: var(--bds-sizes-size-20);
            top: -12px;
        }
    }

    fieldset.open {
        border-color: var(--bds-color-border-interactive);
        border-width: var(--bds-sizes-size-2);
    }

    .list-selector {
        padding-left: 0;
    }

    .popover--wrapper {
        padding: var(--bds-sizes-size-8) 0;
        width: 100%;
        max-height: ${({ maxHeight }) => maxHeight || `calc(var(--bds-sizes-size-16) * 16.5)`};
        border: 1px solid var(--bds-color-border-subdued);
        background-color: var(--bds-color-elevation-04);
        box-shadow: var(--bds-shadows-shadow-04);
        overflow: auto;
        transform: translate(0px, 50px);

        ${Shapes}
    }
`

export { DropdownWrapper }

export default DropdownWrapper
