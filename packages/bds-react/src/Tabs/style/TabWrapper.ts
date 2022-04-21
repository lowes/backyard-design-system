import styled, { css } from 'styled-components'

import type { TabsProps } from '../Tabs'

const Focused =  css`
    &:focus, &.focus {
        outline: none;
        z-index: 1;
        box-shadow: 0 0 0 var(--bds-sizes-size-1) var(--bds-color-action-interactive);
    }
`

const TabWrapper = styled.button<TabsProps>`
    &.tab {
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        width: 100%;
        height: var(--bds-sizes-size-40);
        outline: none;
        text-decoration: none;
        padding: 0 var(--bds-sizes-size-20);
        margin: 0;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid var(--bds-color-border-subdued);
        background-color: transparent;
        cursor: pointer;

        &:hover:not(.selected):not(.disabled), &.hover:not(.selected):not(.disabled) {
            border-bottom-color: var(--bds-color-action-interactive);
        }

        &.selected {
            border-bottom-color: var(--bds-color-action-interactive);
            box-shadow: 0 1px 0 var(--bds-color-action-interactive);

            ${Focused};
        }

        &.disabled {
            z-index: 0;
            cursor: not-allowed;

            & > p {
                color: var(--bds-color-text-disabled);
            }
        }

        ${Focused};
    }
`

export {
    TabWrapper
}

export default TabWrapper