import styled from 'styled-components'

import PickerBase from '../../styles/PickerBase'

const CalendarWrapper = styled.div`
    ${PickerBase}

    padding: var(--bds-sizes-size-16);

    .calendar-header {
        position: relative;
        height: var(--bds-sizes-size-44);
        border-bottom: var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);
        margin-bottom: var(--bds-sizes-size-16);

        h6 {
            margin: 0;
        }

        .month-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            height: 100%;

            padding-top: var(--bds-sizes-size-4);

            .month, .year {
                letter-spacing: var(--bds-sizes-size-1);

                padding: var(--bds-sizes-size-2);
            }
        }

        .month-switcher {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-top: -1rem;

            & > button:first-child {
                float: left;
            }

            & > button:last-child {
                float: right;
            }
        }
    }
`

export {
    CalendarWrapper
}

export default CalendarWrapper
