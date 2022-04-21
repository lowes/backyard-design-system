import * as React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import * as theme from '@lowes-tech/bds-tokens/v2/light/theme'

/**
 * Render Wrapper Helper
 *
 * This component wraps all test renders from react-testing-library
 * Uses default ThemeProvider with light
 */
const RenderWrapper = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

/**
 * Function to override custom render with
 *
 * @param {*} ui
 * @param {*} options
 */
const customRender = (ui, options) => render(ui, { wrapper: RenderWrapper, ...options })

export { customRender }
