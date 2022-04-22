# @lowes-tech/bds-react/DatePicker

## Interfaces

- [DatePickerChangeInfo](interfaces/DatePickerChangeInfo.md)
- [DatePickerProps](interfaces/DatePickerProps.md)

## References

### default

Renames and re-exports [DatePicker](README.md#datepicker)

## Type aliases

### DatePickerRef

Ƭ **DatePickerRef**: `DatePickerNativeRef`

## Variables

### DatePicker

• **DatePicker**: `BDSForwardRef`<[`DatePickerProps`](interfaces/DatePickerProps.md) & { `ref?`: `any`  }\>

Backyard React Date Picker

`DatePicker` is used for selecting dates from a calendar, either through
the native date picker for mobile devices, or through a custom calendar popover.

The text input of the picker uses `type` === 'date' for supporting browser, while gracefully
defaulting to a `text` input type with masking to help the user enter the correct date.

This component has many variants dependending on the props given.

For a regular Date Picker with all dates selectable, use the default:
```
 <DatePicker />
```
> This Date Picker gives the user a text `input` and a calendar popover to use to select any date
> On Mobile displays, this component switches to an `input` with `type` === 'date' for native browsers

For a date picker that only allows the user to select certain dates, use the `dates` prop:
```
 <DatePicker
     label="Record Date"
     dates={[
         { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
         { label: 'Today 9:15 AM', value: '2020-07-19' },
         { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
     ]}
 />
 // Or...
 <DatePicker
     label="Record Date"
     dates={[
         '2020-07-18',
         '2020-07-19',
         '2020-07-20'
     ]}
 />
 // Or...
 <DatePicker
     label="Record Date"
     dates={[
         new Date(2020, 06, 18),
         new Date(2020, 06, 19),
         new Date(2020, 06, 20)
     ]}
 />
```
> This Date Picker gives the user a read-only `select` and a calendar popover to use to select only the dates provided
> `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value
> On mobile displays, removes the popover and uses the native `select` to select the date

For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
```
 <DatePicker
     label="Record Date"
     minDate="2020-07-10"
     maxDate="2020-07-27"
     disableDates={[
         '2020-07-18',
         '2020-07-19',
         '2020-07-20'
     ]}
 />
```
> This Date Picker gives the user a text `input` and a calendar popover to use to select and dates that are not disabled
> `disableDates`, `minDate`, and `maxDate` can take a list of `Date`s, date strings ('yyyy-MM-dd')
> On mobile displays, removes the popover and uses the native `date` input
 >> NOTE: mobile browsers do not utilize `disableDates`, but will utilize `minDate` and `maxDate`

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
