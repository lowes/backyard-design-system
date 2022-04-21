import styled from 'styled-components'

const UnorderedListWrapper = styled.ul`
    list-style-type: disc;
    color: var(--bds-color-text-primary);
    padding-left: var(--bds-sizes-size-16);

    li {
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: var(--bds-font-weight-regular);
        font-size: var(--bds-sizes-size-16);
        line-height: var(--bds-sizes-size-24);
    }

    & ul { padding-left: var(--bds-sizes-size-16); }

    /* .nested-list { padding-left: ${({ theme }) => theme.sizes.size_16}; }
    .nested-list li { color: ${({ theme }) => theme.color.text_secondary}; } */

    &.density--condensed li { padding-top: var(--bds-sizes-size-4); }
    &.density--normal li { padding-top: var(--bds-sizes-size-8); }
    &.density--comfort li { padding-top: var(--bds-sizes-size-12); }
`

export {
    UnorderedListWrapper
}

export default UnorderedListWrapper