import * as React from 'react'

import { ThemeContext } from './ThemeProvider'
import type { BackyardTheme } from './ThemeProvider'

const validateBackyardTheme = (theme: BackyardTheme, name: BackyardTheme['name']) => {
    if (!theme?.name) {
        // eslint-disable-next-line no-console
        throw Error(
            `Backyard: A Backyard component ${
                name ? `(\`${name}\`)` : ''
            } is missing a Backyard Theme.\n` +
                'This component uses Backyard tokens and a Backyard Theme is required.\n' +
                `Please wrap ${
                    name ? `\`${name}\` or` : ''
                } your entire application in a Backyard \`ThemeProvider\`.\n` +
                'For a getting started guide, see \n' +
                '`https://backyard.lowes.com/GetStarted/Develop#create-theme-provider`',
        )
    }

    return true
}

const useBackyardTheme = (props: UseBackyardThemeProps = {}) => {
    const { validate = false, name }: UseBackyardThemeProps = props

    const theme = React.useContext<BackyardTheme>(ThemeContext)

    if (validate && process.env.NODE_ENV !== 'production') {
        React.useEffect(() => {
            validateBackyardTheme(theme, name)
        }, [theme])
    }

    return theme
}

interface UseBackyardThemeProps {
    /**
     * Whether or not to validate component
     */
    validate?: boolean
    /**
     * Name of the component to validate
     */
    name?: string
}

export { useBackyardTheme, validateBackyardTheme }

export default useBackyardTheme
