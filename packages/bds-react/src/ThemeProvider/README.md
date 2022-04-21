# @lowes-tech/bds-react/ThemeProvider

## Namespaces

- [ThemeProvider](modules/ThemeProvider.md)

## Interfaces

- [BackyardTheme](interfaces/BackyardTheme.md)
- [ThemeProviderProps](interfaces/ThemeProviderProps.md)

## References

### default

Renames and re-exports [ThemeProvider](README.md#themeprovider)

## Type aliases

### BaseTheme

Ƭ **BaseTheme**: typeof `Theme`

## Variables

### ThemeConsumer

• **ThemeConsumer**: `React.Consumer`<[`BackyardTheme`](interfaces/BackyardTheme.md)\> = `StyledComponentsThemeConsumer`

ThemeConsumer same as 'styled-components'

___

### ThemeContext

• **ThemeContext**: `React.Context`<[`BackyardTheme`](interfaces/BackyardTheme.md)\> = `StyledComponentsThemeContext`

ThemeContext same as 'styled-components'

___

### ThemeProvider

• **ThemeProvider**: `BDSFunctional`<[`ThemeProviderProps`](interfaces/ThemeProviderProps.md)\>

Backyard React Theme Provider

 <ThemeProvider theme="light" font="fellix" someOtherContext="value">
     <Grid.Container>
         ...
             <Button />
         ...
     </Grid.Container>
 </ThemeProvider>

Custom Theme Provider wrapper to provide extra context and overrides for Backyard Themes.

## Functions

### dropShadow

▸ `Const` **dropShadow**(`shadow`, `defaultShadow?`): `string`

Converts box-shadow to drop-shadow, if necessary.

Use for `filter` css instead of `box-shadow`.

**`example`**
```
dropShadow(theme.shadows.shadow_04)
 => 'drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2)) 
         drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14)) 
         drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12))'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `shadow` | `string` | `undefined` | box-shadow |
| `defaultShadow` | `string` | `'none'` | default shadow if none given |

#### Returns

`string`

___

### getShape

▸ `Const` **getShape**(`shapeProp`, `shapeContext`): ``"rounded"`` \| ``"squared"``

Get the shape or shape context in priority

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shapeProp` | `ExtendedShapes` | shape value from props |
| `shapeContext` | ``"rounded"`` \| ``"squared"`` | shape value from context |

#### Returns

``"rounded"`` \| ``"squared"``

___

### splitShadows

▸ `Const` **splitShadows**(`shadows`, `defaultShadow`): `string`[]

Split the shadows in a given string

**`example`**
```
splitShadows('0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)')
 => [
     '0px 2px 1px rgba(0, 0, 0, 0.2)',
     '0px 1px 1px rgba(0, 0, 0, 0.14)',
     '0px 1px 3px rgba(0, 0, 0, 0.12)'
 ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shadows` | `string` | shadow string from backyard |
| `defaultShadow` | `string` | default shadow if none given |

#### Returns

`string`[]

___

### useBackyardTheme

▸ `Const` **useBackyardTheme**(`props?`): [`BackyardTheme`](interfaces/BackyardTheme.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `UseBackyardThemeProps` |

#### Returns

[`BackyardTheme`](interfaces/BackyardTheme.md)

___

### validateBackyardTheme

▸ `Const` **validateBackyardTheme**(`theme`, `name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`BackyardTheme`](interfaces/BackyardTheme.md) |
| `name` | `string` |

#### Returns

`boolean`
