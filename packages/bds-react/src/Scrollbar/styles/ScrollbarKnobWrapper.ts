import styled from 'styled-components'

const ScrollbarKnobWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 10%;
    height: var(--bds-sizes-size-4);
    background-color: var(--bds-color-action-interactive);
    border-radius: var(--bds-border-radius-circle);
    -webkit-transition: top 0.08s;
    -moz-transition: top 0.08s;
    -ms-transition: top 0.08s;
    -o-transition: top 0.08s;
    transition: top 0.08s;

    &:hover {
        background-color: var(--bds-color-action-interactive-hover);
    }

    &:hover, &:focus, &:active {
        margin-top: -0.0625rem;
        height: var(--bds-sizes-size-6);
    }
`

export { ScrollbarKnobWrapper }

export default ScrollbarKnobWrapper
