# @lowes-tech/bds-react

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Node](https://img.shields.io/badge/node-8+-blue)
![NPM](https://img.shields.io/badge/npm-5+-blue)
![Contributors](https://img.shields.io/badge/contributers-welcome-brightgreen)

<br>

Backyard Design System React component library is a npm package that exposes atomic level react components for any Omni-Channel product that is using React as their front-end framework.

<br>

## Contributing
Contributers are welcome to the bds-react project. Need to update a component for a new business need? Want to add a new component to the repository? Follow the [contribution guide](CONTRIBUTING.md) to get started.

<br>

## Install
This package requires `node >= 4`, but we recommend `node >= 8`

```bash
npm install -D @lowes-tech/bds-react
```

<br>

## Usage

```js
import * as React from 'react'
import { Grid, Button } from '@lowes-tech/bds-react'

const Component = (props) => {
    //...code
    return (
        <Grid.Container>
            <Grid.Row>
                <Grid.Column>
                    <Button />
                </Grid.Column>
            </Grid.Row>
        </Grid.Container>
    )
}

export default Component
```

<br>

## Components
* [Grid](src/Grid/README.md) component
    * [Container](src/Grid/Container/README.md) component
    * [Row](src/Grid/Row/README.md) component
    * [Column](src/Grid/Column/README.md) component
* [Icon](src/Icon/README.md) component
* [Button](src/Button/README.md) component
    * [PrimaryButton](src/Button/Primary/README.md) component
    * [SecondaryButton](src/Button/Secondary/README.md) component
    * [TertiaryButton](src/Button/Tertiary/README.md) component
    * [IconButton](src/Button/Icon/README.md) component
    * [FlatButton](src/Button/Flat/README.md) component
* [Chip](src/Chip/README.md) component
    * [ChoiceChip](src/Chip/Choice/README.md) component
    * [FilterChip](src/Chip/Filter/README.md) component
    * [InputChip](src/Chip/Input/README.md) 
* [Input](src/Input/README.md) component
    * [Password](src/Input/Password/README.md) component
    * [Search](src/Input/Search/README.md) component
    * [Stepper](src/Input/Stepper/README.md) component
    * [Text](src/Input/Text/README.md) component
    * [TextArea](src/Input/TextArea/README.md) component
* [Select](src/Input/README.md) component
    * [Checkbox](src/Select/Checkbox/README.md) component
    * [Radio](src/Select/Radio/README.md) component
    * [Switch](src/Select/Switch/README.md) component
    * [Dropdown](src/Select/Dropdown/README.md) component
* [Navigation]
    * [Breadcrumb](src/Navigation/Breadcrumb/README.md) component
