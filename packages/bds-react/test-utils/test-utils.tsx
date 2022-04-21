import * as React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import { ThemeProvider } from '../src/ThemeProvider'

/**
 * Render Wrapper Helper
 *
 * This component wraps all test renders from react-testing-library
 * Uses default ThemeProvider with light
 */
const RenderWrapper = ({ children }) => {
    return <ThemeProvider theme="light">{children}</ThemeProvider>
}

/**
 * Function to override custom render with
 *
 * @param {*} ui
 * @param {*} options
 */
// @ts-ignore
const customRender = (ui, options = {}) => render(ui, { wrapper: RenderWrapper, ...options })

/**
 * Function to override custom mount with
 *
 * @param {*} ui
 * @param {*} options
 */
const customMount = (ui, options = {}) =>
    mount(ui, {
        wrappingComponent: ThemeProvider,
        wrappingComponentProps: { theme: 'light' },
        ...options,
    })

export { customRender, customMount }
