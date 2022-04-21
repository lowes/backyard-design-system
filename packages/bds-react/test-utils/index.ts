// @ts-ignore
import { customRender, customMount } from './test-utils'

// Export all from react-testing-library
export * from '@testing-library/react'

// Export Simulate from React-DOM if needed
export { Simulate, act } from 'react-dom/test-utils'

// Override render method
export { customRender as render }

// Override shallow method
export { customMount as mount }
