import * as React from 'react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

jest.setTimeout(1000 * 60 * 20)

// Mock `useRandomId` hook
// gives consistent ids instead
// of randomly generated ones for
// snapshot tests
let mockId = 0

jest.mock('../src/utils/hooks/useRandomId', () => {
    return jest.fn((id) => id || `${mockId++}`)
})

// Before each test...
beforeEach(() => {
    // Reset `useRandomId` counter
    mockId = 0
})
