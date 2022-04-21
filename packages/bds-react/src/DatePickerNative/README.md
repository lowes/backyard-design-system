# @lowes-tech/bds-react/DatePickerNative

## Interfaces

- [DatePickerNativeProps](interfaces/DatePickerNativeProps.md)

## References

### default

Renames and re-exports [DatePickerNative](README.md#datepickernative)

## Type aliases

### DatePickerNativeChangeInfo

Ƭ **DatePickerNativeChangeInfo**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` \| `Date`[] | Parsed date or range of dates |
| `from` | ``"TextPicker"`` \| ``"SelectPicker"`` | Info from either `TextPicker` or `SelectPicker` |
| `value` | `string` \| `number` | Value is always a string |

___

### DatePickerNativeRef

Ƭ **DatePickerNativeRef**: `TextPickerRef` \| `SelectPickerRef`

## Variables

### DatePickerNative

• **DatePickerNative**: `BDSForwardRef`<[`DatePickerNativeProps`](interfaces/DatePickerNativeProps.md) & { `ref?`: `any`  }\>

Backyard React Date Picker Native

`DatePickerNative` is used for selecting dates from a calendar through the native browser.
It is only intended to be used in mobile-only environments to save data size.

The text input of the picker uses `type` === 'date'.

This component has many variants dependending on the props given.

For a regular Date Picker with all dates selectable, use the default:
```
 <DatePickerNative />
```
> This Date Picker gives the user a text `input` with `type` === 'date'
> For browsers that don't support `type` === 'date', this will gracefully default to `type` === 'text'
> Does not include masking

For a date picker that only allows the user to select certain dates, use the `dates` prop:
```
 <DatePickerNative
     label="Record Date"
     dates={[
         { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
         { label: 'Today 9:15 AM', value: '2020-07-19' },
         { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
     ]}
 />
 // Or...
 <DatePickerNative
     label="Record Date"
     dates={[
         '2020-07-18',
         '2020-07-19',
         '2020-07-20'
     ]}
 />
 // Or...
 <DatePickerNative
     label="Record Date"
     dates={[
         new Date(2020, 06, 18),
         new Date(2020, 06, 19),
         new Date(2020, 06, 20)
     ]}
 />
```
> This Date Picker gives the user a `select`
> `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value

For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
```
 <DatePickerNative
     label="Record Date"
     minDate="2020-07-10"
     maxDate="2020-07-27"
 />
```
> This Date Picker gives the user a text `input`
> On mobile displays, uses the native `date` input
 >> NOTE: mobile browsers will utilize `minDate` and `maxDate`

The props `date`, `minDate`, `maxDate`, and `disabledDates` all use the `ParsableDate` type
They can accept the following values as inputs:
 JS Date instance => `new Date(2020, 06, 19)`
 String date => `'2020-07-19'`
 Number timestamp => `1595116800`

The prop `dates` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
It can accept the following values
 JS Date instance => `new Date(2020, 06, 19)`
 String date => `'2020-07-19'`
 Number timestamp => `1595116800`
 ParsableDateObject => {
     label: 'Today, July 19, 2020',
     value: '2020-07-19' // Can be any `ParsableDate`
 }
 ParsableDateRange => {
     label: 'Today, July 19, 2020',
     start: '2020-07-19' // Can be any `ParsableDate`
     end: '2020-07-20' // Can be any `ParsableDate`
 }
