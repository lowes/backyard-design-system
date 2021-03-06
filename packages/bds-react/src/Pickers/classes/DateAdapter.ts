/* eslint-disable class-methods-use-this */
import addDays from "date-fns/addDays"
import addMonths from "date-fns/addMonths"
// import addYears from "date-fns/addYears"
import differenceInMilliseconds from "date-fns/differenceInMilliseconds"
import eachDayOfInterval from "date-fns/eachDayOfInterval"
import endOfDay from "date-fns/endOfDay"
import endOfWeek from "date-fns/endOfWeek"
// import endOfYear from "date-fns/endOfYear"
import format from "date-fns/format"
import getHours from "date-fns/getHours"
import getSeconds from "date-fns/getSeconds"
// import getYear from "date-fns/getYear"
import isAfter from "date-fns/isAfter"
import isBefore from "date-fns/isBefore"
import isEqual from "date-fns/isEqual"
import isSameDay from "date-fns/isSameDay"
// import isSameYear from "date-fns/isSameYear"
import isSameMonth from "date-fns/isSameMonth"
// import isSameHour from "date-fns/isSameHour"
import isValid from "date-fns/isValid"
import dateFnsParse from "date-fns/parse"
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
// import setMonth from "date-fns/setMonth"
import setSeconds from "date-fns/setSeconds"
// import setYear from "date-fns/setYear"
import startOfDay from "date-fns/startOfDay"
import startOfMonth from "date-fns/startOfMonth"
import endOfMonth from "date-fns/endOfMonth"
import startOfWeek from "date-fns/startOfWeek"
// import startOfYear from "date-fns/startOfYear"
// import isWithinInterval from "date-fns/isWithinInterval"
// import longFormatters from "date-fns/_lib/format/longFormatters"
import defaultLocale from "date-fns/locale/en-US"

import { 
    DateAdapterInterface, 
    DateAdapterFormats,
    DateAdapterOptions
} from './DateAdapter.d'

type Locale = typeof defaultLocale

const defaultFormats: DateAdapterFormats = {
    default: "yyyy-MM-dd",
    dayOfMonth: "d",
    fullDate: "PP",
    fullDateTime: "PP p",
    fullDateTime12h: "PP hh:mm aaa",
    fullDateTime24h: "PP HH:mm",
    fullTime: "p",
    fullTime12h: "hh:mm aaa",
    fullTime24h: "HH:mm",
    hours12h: "hh",
    hours24h: "HH",
    keyboardDate: "P",
    keyboardDateTime: "P p",
    keyboardDateTime12h: "P hh:mm aaa",
    keyboardDateTime24h: "P HH:mm",
    minutes: "mm",
    month: "LLLL",
    monthAndDate: "MMMM d",
    monthAndYear: "LLLL yyyy",
    monthShort: "MMM",
    normalDate: "d MMMM",
    normalDateWithWeekday: "EEE, MMM d",
    seconds: "ss",
    shortDate: "MMM d",
    year: "yyyy"
}

const isDate = (value: any): value is Date => value instanceof Date
const isNumber = (value: any): value is Number => Number(value) === value
const isString = (value: any): value is String => typeof value === 'string'

class DateAdapter implements DateAdapterInterface<Date> {
    public locale?: Locale
    
    public formats: DateAdapterFormats

    constructor({ locale, formats }: DateAdapterOptions = {}) {
        this.locale = locale
        this.formats = { ...defaultFormats, ...formats }
    }

    // // Note: date-fns input types are more lenient than this adapter, so we need to expose our more
    // // strict signature and delegate to the more lenient signature. Otherwise, we have downstream type errors upon usage.
    // public is12HourCycleInCurrentLocale() {
    //     if (this.locale) {
    //         return /a/.test(this.locale.formatLong.time())
    //     }

    //     // By default date-fns is using en-US locale with am/pm enabled
    //     return true
    // }

    // public getFormatHelperText(str: string) {
    //     // @see https://github.com/date-fns/date-fns/blob/master/src/format/index.js#L31
    //     const longFormatRegexp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
    //     const locale = this.locale || defaultLocale
    //     return str
    //         .match(longFormatRegexp)
    //         .map((token) => {
    //             const firstCharacter = token[0]
    //             if (firstCharacter === "p" || firstCharacter === "P") {
    //                 const longFormatter = longFormatters[firstCharacter]
    //                 return longFormatter(token, locale.formatLong, {})
    //             }
    //             return token
    //         })
    //         .join("")
    //         .replace(/(aaa|aa|a)/g, "(a|p)m")
    //         .toLocaleLowerCase()
    // }

    // public getCurrentLocaleCode() {
    //     return this.locale?.code || "en-US"
    // }

    public addDays(value: Date, count: number) {
        return addDays(value, count)
    }

    // public addMonths(value: Date, count: number) {
    //     return addMonths(value, count)
    // }

    public isValid(value: any) {
        return isValid(this.date(value))
    }

    public getDiff(value: Date, comparing: Date | string) {
        return differenceInMilliseconds(value, this.date(comparing))
    }

    public isAfter(value: Date, comparing: Date) {
        return isAfter(value, comparing)
    }

    public isBefore(value: Date, comparing: Date) {
        return isBefore(value, comparing)
    }

    public startOfDay(value: Date) {
        return startOfDay(value)
    }

    // public endOfDay(value: Date) {
    //     return endOfDay(value)
    // }

    public getHours(value: Date) {
        return getHours(value)
    }

    public setHours(value: Date, count: number) {
        return setHours(value, count)
    }

    public setMinutes(value: Date, count: number) {
        return setMinutes(value, count)
    }

    public getSeconds(value: Date) {
        return getSeconds(value)
    }

    public setSeconds(value: Date, count: number) {
        return setSeconds(value, count)
    }

    public isSameDay(value: Date, comparing: Date) {
        return isSameDay(value, comparing)
    }

    public isSameMonth(value: Date, comparing: Date) {
        return isSameMonth(value, comparing)
    }

    // public isSameYear(value: Date, comparing: Date) {
    //     return isSameYear(value, comparing)
    // }

    // public isSameHour(value: Date, comparing: Date) {
    //     return isSameHour(value, comparing)
    // }

    public startOfMonth(value: Date) {
        return startOfMonth(value)
    }

    // public endOfMonth(value: Date) {
    //     return endOfMonth(value)
    // }

    public startOfWeek(value: Date) {
        return startOfWeek(value, { locale: this.locale })
    }

    public endOfWeek(value: Date) {
        return endOfWeek(value, { locale: this.locale })
    }

    // public getYear(value: Date) {
    //     return getYear(value)
    // }

    // public setYear(value: Date, count: number) {
    //     return setYear(value, count)
    // }

    public date(value?: any) {
        if (typeof value === "undefined") {
            return new Date()
        }

        if (value === null) {
            return null
        }

        return new Date(value)
    }

    public toJsDate(value: Date) {
        return value
    }

    public parse(date: Date | string | number, formatString: keyof DateAdapterFormats | string = 'default'): Date {
        if (isDate(date)) {
            return date
        }

        if (isNumber(date)) {
            return this.date(date)
        }

        if (isString(date)) {
            const parsedDate = dateFnsParse(date, defaultFormats[formatString] || formatString, new Date(), { locale: this.locale })

            if (this.isValid(parsedDate)) {
                return parsedDate
            }
        }

        return null
    }

    public format(date: Date, formatKey: keyof DateAdapterFormats | string = 'default') {
        return this.formatByString(date, this.formats[formatKey] || formatKey)
    }

    public formatByString(date: Date, formatString: string = defaultFormats.default) {
        return format(date, formatString, { locale: this.locale })
    }

    public reformat(str: string, oldFormat: string, newFormat: string) {
        const date = this.parse(str, oldFormat)
        
        if (date) {
            return this.format(date, newFormat)
        }

        return str
    }

    public isEqual(date: any, comparing: any) {
        if (date === null && comparing === null) {
            return true
        }

        return isEqual(date, comparing)
    }

    // public isNull(date: Date) {
    //     return date === null
    // }

    public isAfterDay(date: Date, value: Date) {
        return isAfter(date, endOfDay(value))
    }

    public isBeforeDay(date: Date, value: Date) {
        return isBefore(date, startOfDay(value))
    }

    // public isBeforeYear(date: Date, value: Date) {
    //     return isBefore(date, startOfYear(value))
    // }

    // public isAfterYear(date: Date, value: Date) {
    //     return isAfter(date, endOfYear(value))
    // }

    // public isWithinRange(date: Date, [start, end]: [Date, Date]) {
    //     return isWithinInterval(date, { start, end })
    // }

    // public formatNumber(numberToFormat: string) {
    //     return numberToFormat
    // }

    public getMinutes(date: Date) {
        return date.getMinutes()
    }

    public getMonth(date: Date) {
        return date.getMonth()
    }

    // public setMonth(date: Date, count: number) {
    //     return setMonth(date, count)
    // }

    // public getMeridiemText(ampm: "am" | "pm") {
    //     return ampm === "am" ? "AM" : "PM"
    // }

    public getNextMonth(date: Date) {
        return addMonths(date, 1)
    }

    public getPreviousMonth(date: Date) {
        return addMonths(date, -1)
    }

    // public getMonthArray(date: Date) {
    //     const firstMonth = startOfYear(date)
    //     const monthArray = [firstMonth]

    //     while (monthArray.length < 12) {
    //         const prevMonth = monthArray[monthArray.length - 1]
    //         monthArray.push(this.getNextMonth(prevMonth))
    //     }

    //     return monthArray
    // }

    public mergeDateAndTime(date: Date, time: Date) {
        return this.setSeconds(
            this.setMinutes(this.setHours(date, this.getHours(time)), this.getMinutes(time)),
            this.getSeconds(time)
        )
    }

    public getWeekdays() {
        const now = new Date()
        return eachDayOfInterval({
            start: startOfWeek(now, { locale: this.locale }),
            end: endOfWeek(now, { locale: this.locale }),
        }).map((day) => this.formatByString(day, "EEEEEE"))
    }

    public getWeekArray(date: Date) {
        const start = startOfWeek(startOfMonth(date), { locale: this.locale })
        const end = endOfWeek(endOfMonth(date), { locale: this.locale })

        let count = 0
        let current = start
        const nestedWeeks: Date[][] = []

        while (isBefore(current, end)) {
            const weekNumber = Math.floor(count / 7)
            nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || []
            nestedWeeks[weekNumber].push(current)
            current = addDays(current, 1)
            count += 1
        }

        return nestedWeeks
    }

    // public getYearRange(start: Date, end: Date) {
    //     const startDate = startOfYear(start)
    //     const endDate = endOfYear(end)
    //     const years: Date[] = []

    //     let current = startDate
    //     while (isBefore(current, endDate)) {
    //         years.push(current)
    //         current = addYears(current, 1)
    //     }

    //     return years
    // }
}

export {
    DateAdapter,
    Locale
}

export default DateAdapter
