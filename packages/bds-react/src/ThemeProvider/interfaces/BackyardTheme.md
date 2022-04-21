# Interface: BackyardTheme

## Hierarchy

- [`BaseTheme`](../README.md#basetheme)

  ↳ **`BackyardTheme`**

## Properties

### breakpoints

• **breakpoints**: `Record`<`string`, `string`\>

Record of breakpoints provided to application

___

### context

• **context**: `BackyardThemeContext`

Context can be any object

___

### isDesktop

• **isDesktop**: `boolean`

Whether or not current viewport is desktop, tablet, or mobile

___

### isMobile

• **isMobile**: `boolean`

___

### isTablet

• **isTablet**: `boolean`

___

### name

• **name**: `string`

Name of the current theme

#### Overrides

BaseTheme.name

___

### setOverride

• **setOverride**: `Dispatch`<`SetStateAction`<`object`\>\>

`setOverride` dispatch to change the overrides of the Backyard theme

___

### setTheme

• **setTheme**: `Dispatch`<`SetStateAction`<``"light"`` \| ``"dark"``\>\>

`setTheme` dispatch to change the theme state of the the Backyard theme

## Methods

### setContext

▸ **setContext**(`newContext`): `void`

`setContext` dispatch to change the context of the Backyard theme
Can store anything such as the font, heading, etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newContext` | `any` |

#### Returns

`void`
