import styled from 'styled-components'

import BadgeBase from './BadgeBase'
import Filled from './variants/Filled'
import Outlined from './variants/Outlined'
import Arrows from './Arrows'

const BadgeWrapper = styled.span`
    display: inline-flex;
    flex-direction: ${({ arrow }) => (arrow === 'left') ? 'row-reverse' : 'row'};
    align-items: center;
    justify-content: center;

    .arrow {
        box-sizing: border-box;
        height: 1.125rem;
        width: 1.125rem;
        border-width: 0.0625rem;
        border-style: solid;
        transform: rotateY(0deg) rotate(45deg);
        border-radius: var(--bds-border-radius-md);
    }

    ${BadgeBase}

    .badge-label {
        &.variant {
            &--filled {
                ${Filled}
            }
            
            &--outlined {
                ${Outlined}
            }
        }

        ${Arrows}
    }

    .bold {
        font-weight: ${
            ({ theme }) => (theme.context.font === 'roboto')
                ? theme.font.weight.medium
                : theme.font.weight.semibold}
    }
`

export {
    BadgeWrapper
}

export default BadgeWrapper
