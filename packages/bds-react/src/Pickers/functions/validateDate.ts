import DateAdapter from "../classes/DateAdapter"

interface DateValidationProps {
    /**
     * Min selectable date.
     * @default Date(1900-01-01)
     */
    minDate?: Date
    /**
     * Max selectable date.
     * @default Date(2099-31-12)
     */
    maxDate?: Date
    /**
     * Array of disabled dates
     */
    disableDates?: Date[]
    /**
     * Array of enabled dates
     */
    dates?: Date[]
    /**
     * Disable specific date @DateIOType.
     */
    shouldDisableDate?: (day: Date) => boolean
    /**
     * Disable past dates.
     * @default false
     */
    disablePast?: boolean
    /**
     * Disable future dates.
     * @default false
     */
    disableFuture?: boolean
}

const validateDate = (
    adapter: DateAdapter,
    value: Date,
    { minDate, maxDate, disableFuture, shouldDisableDate, disablePast, disableDates, dates }: DateValidationProps
) => {
    const now = adapter.date()
    const date = adapter.date(value)

    if (value === null) {
        return null
    }

    switch (true) {
        case !adapter.isValid(value):
            return 'invalidDate'

        case Boolean(shouldDisableDate && shouldDisableDate(date)):
            return 'shouldDisableDate'

        case Boolean(disableFuture && adapter.isAfterDay(date, now)):
            return 'disableFuture'

        case Boolean(disablePast && adapter.isBeforeDay(date, now)):
            return 'disablePast'

        case Boolean(minDate && adapter.isBeforeDay(date, minDate)):
            return 'minDate'

        case Boolean(maxDate && adapter.isAfterDay(date, maxDate)):
            return 'maxDate'

        case Boolean(
			disableDates && disableDates
                .some(
					(disabledDate) => 
						adapter.isEqual(adapter.startOfDay(date), adapter.startOfDay(disabledDate))
				)
		):
            return 'disableDates'

        case Boolean(
			dates && dates.length > 0 && !dates
				.some((enabledDate) => 
					adapter.isEqual(adapter.startOfDay(date), adapter.startOfDay(enabledDate))
				)
		):
            return 'dates'

        default:
            return null
    }
}

export {
    validateDate
}

export type {
    DateValidationProps
}

export default validateDate
