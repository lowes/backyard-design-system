import styled from 'styled-components'

const OverlayBase = styled.div`
    z-index: var(--bds-zIndex-overlay);
    position: fixed;

    right: 0;
    bottom: 0;
    top: 0;
    left: 0;

    background-color: var(--bds-color-overlay);

    -webkit-tap-highlight-color: transparent;

    &.invisible {
        background-color: transparent;
    }
`

export {
    OverlayBase
}

export default OverlayBase
