// original module declarations
import 'styled-components'

import { BackyardTheme } from './src/ThemeProvider/ThemeProvider'

// extended declarations
declare module 'styled-components' {
    export interface DefaultTheme extends BackyardTheme {
        /** Extends Backyard Theme */
    }
}
