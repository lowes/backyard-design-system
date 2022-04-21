// original module declarations
import 'styled-components'

import type { RootObject as BackyardTheme } from '@lowes-tech/bds-tokens/v2/white/theme'

// extended declarations
declare module 'styled-components' {
  export interface DefaultTheme extends BackyardTheme {
    /** Extends Backyard Theme */
  }
}
