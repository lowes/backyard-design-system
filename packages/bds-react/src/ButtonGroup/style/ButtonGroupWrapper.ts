import styled from 'styled-components'

import type { ButtonGroupProps } from '../ButtonGroup'

const ButtonGroupWrapper = styled.div<ButtonGroupProps>`
    display: inline-flex;
    flex-direction: row;
    padding: var(--bds-sizes-size-4);
    padding-right: 0;
    border-width: var(--bds-sizes-size-1);
    border-style: solid;
    border-radius: var(--bds-border-radius-lg);

    &.color--interactive {
        border-color: var(--bds-color-border-interactive);
    }

    &.color--neutral {
        border-color: var(--bds-color-border-default);
    }

    &.variant--ghost {
        border-color: transparent;
    }

    .button {
        margin-right: var(--bds-sizes-size-4);
    }
`

export default ButtonGroupWrapper
