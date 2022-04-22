# @lowes-tech/bds-react/Radio

## Interfaces

- [RadioProps](interfaces/RadioProps.md)

## References

### default

Renames and re-exports [Radio](README.md#radio)

## Type aliases

### RadioRef

Ƭ **RadioRef**: `HTMLInputElement`

## Variables

### Radio

• **Radio**: `BDSForwardRef`<[`RadioProps`](interfaces/RadioProps.md)\>

Backyard React Radio

Radio for interacting with selections in a form.

> Note: `name` is required when not a child of `RadioGroup` with a name

 <Radio id="radio" />

To give `Radio` a label, use `FormControlLabel`, similar to `Checkbox` and `Switch`:

 <FormControlLabel
     control={<Radio id="radio" name="radio" />}
     label="Label"
 />

To give `Radio` helper text, use `FormHelperText` inside a `FormControl`:

> Note: When grouping `Radio`s together, use the `RadioGroup` to sync multiple
> radios together with one `name`, one `onChange`, and even set a `defaultValue`.

 <FormControl>
     <FormHeading>What color was Gandalf's robes in LotR?</FormHeading>
     <RadioGroup
         name="gandalf_robe"
         defaultValue="gray"
     >
         <FormControlLabel
             control={<Radio id="radio_white" value="white" />}
             label="White"
         />
         <FormControlLabel
             control={<Radio id="radio_gray" value="gray" />}
             label="Gray"
         />
         <FormControlLabel
             control={<Radio id="radio_both" value="both" />}
             label="Both"
         />
     </RadioGroup>
     <FormHelperText>Select the right answer</FormHelperText>
 </FormControl>
