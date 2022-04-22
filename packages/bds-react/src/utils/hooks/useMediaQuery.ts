import * as React from 'react'

const isCompatible = typeof window === 'object' && typeof window.matchMedia === 'function'

/**
 * Backyard React useMediaQuery Hook
 *
 * This hook utilizes the `window` `matchMedia` handler supported by all major browsers
 * This can be used to test whether or not the viewport is mobile, large, extra-large, etc.
 *
 * @param query - Media Query to use
 * @param defaultState - Default State (true or false) of whether or not media query passed
 */
const useMediaQuery = (query: string, defaultState: boolean = false) => {
	const [state, setState] = React.useState(
		isCompatible ? () => window.matchMedia(query).matches : defaultState,
	)

	// eslint-disable-next-line consistent-return
	React.useEffect(() => {
		if (isCompatible) {
			let mounted = true

			const mediaQuery = window.matchMedia(query)

			const onChange = () => {
				if (!mounted) {
					return
				}

				setState(!!mediaQuery.matches)
			}

			mediaQuery.addListener(onChange)

			setState(mediaQuery.matches)

			return () => {
				mounted = false

				mediaQuery.removeListener(onChange)
			}
		}
	}, [query])

	return state
}

export default useMediaQuery
