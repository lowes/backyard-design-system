import styled from 'styled-components'

import PickerBase from './PickerBase'

const ListPickerWrapper = styled.div`
    ${PickerBase}

    padding: ${({ theme }) => theme.sizes.size_8} 0;

    overflow-y: auto;

    li {
        overflow: overlay;
    }
`

export {
    ListPickerWrapper
}

export default ListPickerWrapper
