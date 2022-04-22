# [Backyard](https://www.lowes.com) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bryantjderosier/templates/blob/main/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://www.lowes.com)

<a target="_blank" href="https://github.com/lowes/backyard-design-system">
  <img alt="Backyard logo" src="./imgs/backyard-logo.png">
</a>

<br />

Backyard is Lowe’s open source design system for digital products and experiences. With the Backyard Design Tokens as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.

<br />

## Guiding Principles

**Backyard is open.** The design system is a distributed effort, guided by the principles of the open source movement. Backyard’s users are also its makers, and everyone is encouraged to contribute.

**Backyard is inclusive.** It’s designed and built to be accessible to all, regardless of ability or situation.

**Backyard is modular and flexible.** The system’s modularity ensures maximum flexibility in execution. Its components are designed to work seamlessly with each other, in whichever combination suits the needs of the user.

**Backyard builds consistency.** Based on the Backyard Design Tokens, every element and component of Backyard was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.

<br />

## Ecosystem

| Project       | Status                              | Description                       |
| ------------- | ----------------------------------- | --------------------------------- |
| [tokens]      | [![tokens-status]][tokens-pkg]      | The styling engine for Backyard   |
| [icons]       | [![icons-status]][icons-pkg]        | Icon pack as react components     |
| [react]       | [![react-status]][react-pkg]        | React UI component library        |

[tokens]: https://github.com/lowes/backyard-design-system
[icons]: https://github.com/lowes/backyard-design-system
[react]: https://github.com/lowes/backyard-design-system

[tokens-status]: https://img.shields.io/npm/v/@lowes-tech/bds-tokens.svg
[icons-status]: https://img.shields.io/npm/v/@lowes-tech/bds-icons.svg
[react-status]: https://img.shields.io/npm/v/@lowes-tech/bds-react.svg

[tokens-pkg]: https://www.npmjs.com/package/@lowes-tech/bds-tokens
[icons-pkg]: https://www.npmjs.com/package/@lowes-tech/bds-icons
[react-pkg]: https://www.npmjs.com/package/@lowes-tech/bds-react

<br />

## Installation

#### NPM
```bash
npm install --save-dev @lowes-tech/bds-tokens @lowes-tech/bds-icons @lowes-tech/bds-react
```

#### Yarn
```bash
yarn add -D @lowes-tech/bds-tokens @lowes-tech/bds-icons @lowes-tech/bds-react
```

#### PNPM
```bash
pnpm add -D @lowes-tech/bds-tokens @lowes-tech/bds-icons @lowes-tech/bds-react
```

<br />

## Setup

### Create the Theme Provider

```jsx
import React from 'react'
import { ThemeProvider } from '@lowes-tech/bds-react'

const App = (props) => {
  return (
    <ThemeProvider theme='light'>
      { props.children }
    </ThemeProvider>
  )
}
```

### Add Global Styles


```js
/** Globals.ts */

import { createGlobalStyle } from 'styled-components'
import { Fonts } from '@lowes-tech/bds-react'
import { ThemeVariables } from '@lowes-tech/bds-tokens'

const GlobalStyles = createGlobalStyle`
  ${ ThemeVariables }
  ${ Fonts }
  
  // other css global code (eg. Resets)
`

export { GlobalStyles }
export default GlobalStyles
```

```jsx
/** App.tsx */

import React from 'react'
import { ThemeProvider } from '@lowes-tech/bds-react'
import { GlobalStyles } from './Globals'

const App = (props) => {
  return (
    <ThemeProvider theme="light" font="roboto">
      <GlobalStyles />
      { props.children }
    </ThemeProvider>
  )
}

export { App }
export default App
```


<br />

## Contributing

The main purpose of this repository is to continue evolving Backyard, making it faster and easier to use. Development of Backyard happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### [Code of Conduct](CODE_OF_CONDUCT.md)

Backyard has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](CONTRIBUTING.md)

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Backyard.

### [Good First Issues](https://github.com/bryantjderosier/templates/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/bryantjderosier/templates/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started.

### License

Backyard is [MIT licensed](./LICENSE).

---
