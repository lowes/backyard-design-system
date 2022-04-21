import styled from 'styled-components'
import type { ScrollToTopProps } from '../ScrollToTop'

const ScrollToTopWrapper = styled.div<ScrollToTopProps>`
    display: block;
    position: fixed;
    z-index: var(--bds-zIndex-floating);

    &.hide {
        bottom: -3rem !important;
    }

    &.animate {
        transition: bottom ease-in-out 0.2s;
    }
`

export { ScrollToTopWrapper }

export default ScrollToTopWrapper
