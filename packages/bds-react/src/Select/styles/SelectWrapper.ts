import styled from 'styled-components'
import Stacked from './Stacked'

const SelectWrapper = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    vertical-align: top;
    padding: 0;
    position: relative;

    select, legend, label, span, .suffix {
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: var(--bds-font-weight-regular);
        font-size: var(--bds-sizes-size-16);
        line-height: var(--bds-sizes-size-24);
        color: var(--bds-color-text-primary);
    }

    svg {
        box-sizing: border-box;
    }

    select {
        box-sizing: border-box;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding-left: var(--bds-sizes-size-16);
        padding-right: var(--bds-sizes-size-40);
        appearance: none;

        background-color: transparent;
    }

    &.item--before {
        select {
            padding-left: var(--bds-sizes-size-40);
        }
    }

    .item--before {
        position: absolute;
        top: var(--bds-sizes-size-16);
        left: var(--bds-sizes-size-16);
    }

    .item--after {
        position: absolute;
        top: var(--bds-sizes-size-16);
        right: var(--bds-sizes-size-16);
    }

    &.size--small .item--after,
    &.size--small .item--before {
        top: var(--bds-sizes-size-14);
    }

    &.size--large .item--after,
    &.size--large .item--before {
        top: var(--bds-sizes-size-20);
    }

    &.size--jumbo .item--after,
    &.size--jumbo .item--before {
        top: 1.375rem;
    }

    &.state--error svg.item--after path {
        fill: var(--bds-color-icon-red);
    }   

    &.has--placeholder {
        label { display: none; }
        legend { display: none; }
    }

    &.stacked {
        ${Stacked}
    }
`

export { SelectWrapper }
export default SelectWrapper
