# @lowes-tech/bds-react/Toggle

## Interfaces

- [ToggleButtonProps](interfaces/ToggleButtonProps.md)
- [ToggleProps](interfaces/ToggleProps.md)

## References

### default

Renames and re-exports [Toggle](README.md#toggle)

## Type aliases

### ToggleButtonGroupOverrideProps

Ƭ **ToggleButtonGroupOverrideProps**: ``"state"`` \| ``"variant"``

___

### ToggleButtonRef

Ƭ **ToggleButtonRef**: `HTMLButtonElement`

___

### ToggleOptions

Ƭ **ToggleOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `enforceSelected` | [`ToggleProps`](interfaces/ToggleProps.md)[``"enforceSelected"``] |
| `exclusive` | [`ToggleProps`](interfaces/ToggleProps.md)[``"exclusive"``] |

___

### ToggleRef

Ƭ **ToggleRef**: `ButtonGroupRef`

___

### ToggleState

Ƭ **ToggleState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | `ToggleAction` |
| `value` | [`ToggleValue`](README.md#togglevalue) |

___

### ToggleValue

Ƭ **ToggleValue**: `ToggleValueTypes` \| `ToggleValueTypes`[] \| `Set`<[`ToggleValue`](README.md#togglevalue)\>

## Variables

### Toggle

• **Toggle**: `BDSForwardRef`<[`ToggleProps`](interfaces/ToggleProps.md)\>

Backyard React Toggle

Toggle wrapper to manage state of a group of `ToggleButton`s

Examples:

- [Toggle](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Toggle)

API:

- [Toggle API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Toggle)
- inherits [ButtonGroup API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ButtonGroup)

- [ToggleButton API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ToggleButton)

___

### ToggleButton

• **ToggleButton**: `BDSForwardRef`<[`ToggleButtonProps`](interfaces/ToggleButtonProps.md)\>

Backyard React Toggle Button

Toggle button to be used as a child of `Toggle`

Examples:

- [Toggle](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Toggle)

API:

- [ToggleButton API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ToggleButton)
