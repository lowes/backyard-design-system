import styled from 'styled-components'

const DatePickerWrapper = styled.div`
    &.interaction--completed.completed {
        label {
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
    }
`

export { DatePickerWrapper }
export default DatePickerWrapper