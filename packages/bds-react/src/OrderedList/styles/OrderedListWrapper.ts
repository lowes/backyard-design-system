import styled from 'styled-components'

const OrderedListWrapper = styled.ol`
    list-style-type: decimal;
    color: var(--bds-color-text-primary);
    padding-left: var(--bds-sizes-size-16);

    li {
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: var(--bds-font-weight-regular);
        font-size: var(--bds-sizes-size-16);
        line-height: var(--bds-sizes-size-24);
    }

    & ol ol ol {
        list-style-type: decimal; 
    }

    & ol,
    & ol ol ol ol { 
        padding-left: var(--bds-sizes-size-16);
        list-style-type: lower-latin; 
    }

    & ol ol,
    & ol ol ol ol ol { 
        padding-left: var(--bds-sizes-size-16);
        list-style-type: lower-roman; 
    }

    &.density--condensed li { padding-top: var(--bds-sizes-size-4); }
    &.density--normal li { padding-top: var(--bds-sizes-size-8); }
    &.density--comfort li { padding-top: var(--bds-sizes-size-12); }
`

export {
    OrderedListWrapper
}

export default OrderedListWrapper