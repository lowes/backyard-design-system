import { DateAdapterInterface } from '../classes/DateAdapter.d'

interface FindClosestDateParams {
    date: Date
    adapter: DateAdapterInterface<Date>
    minDate: Date
    maxDate: Date
    disableFuture: boolean
    disablePast: boolean
    shouldDisableDate: (date: Date) => boolean
}

const findclosestDate = ({
    date,
    adapter,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    shouldDisableDate,
}: FindClosestDateParams) => {
    const today = adapter.startOfDay(adapter.date())

    if (disablePast && adapter.isBefore(minDate!, today)) {
        // eslint-disable-next-line no-param-reassign
        minDate = today
    }

    if (disableFuture && adapter.isAfter(maxDate, today)) {
        // eslint-disable-next-line no-param-reassign
        maxDate = today
    }

    let forward = date
    let backward = date
    if (adapter.isBefore(date, minDate)) {
        forward = adapter.date(minDate)
        backward = null
    }

    if (adapter.isAfter(date, maxDate)) {
        if (backward) {
            backward = adapter.date(maxDate)
        }

        forward = null
    }

    while (forward || backward) {
        if (forward && adapter.isAfter(forward, maxDate)) {
            forward = null
        }
        if (backward && adapter.isBefore(backward, minDate)) {
            backward = null
        }

        if (forward) {
            if (!shouldDisableDate(forward)) {
                return forward
            }
            forward = adapter.addDays(forward, 1)
        }

        if (backward) {
            if (!shouldDisableDate(backward)) {
                return backward
            }
            backward = adapter.addDays(backward, -1)
        }
    }

    // fallback to today if no enabled days
    return adapter.date()
}

export {
    findclosestDate,
    FindClosestDateParams
}

export default findclosestDate
