/* eslint-disable import/prefer-default-export */

function isParsableDateObject(value: any): value is ParsableDateObject {
    return (
        value &&
        (value as ParsableDateObject).label !== undefined &&
        (value as ParsableDateObject).value !== undefined
    )
}

function isParsableDateRange(value: any): value is ParsableDateRange {
    return (
        value &&
        (value as ParsableDateRange).label !== undefined &&
        (value as ParsableDateRange).start !== undefined &&
        (value as ParsableDateRange).end !== undefined
    )
}

type ParsableDate = string | number | Date | null | undefined

type ParsableDateObject = {
    label: string
    value: ParsableDate
    disabled?: boolean
}

type ParsableDateRange = {
    label: string
    start: ParsableDate
    end: ParsableDate
    disabled?: boolean
}

export {
    isParsableDateObject,
    isParsableDateRange
}

export type {
    ParsableDate,
    ParsableDateObject,
    ParsableDateRange
}
