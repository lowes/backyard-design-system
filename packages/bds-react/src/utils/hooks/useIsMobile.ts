import { useContext } from 'react'
import { ThemeContext } from '../../ThemeProvider'
import useMediaQuery from './useMediaQuery'

const useIsMobile = (query?: string) => {
	const theme = useContext(ThemeContext)

	/**
     * Matchers for which device it is on
     */
	const isMobile = useMediaQuery(`only screen and (max-width: ${theme.grid.breakpoint.md.min})`)
	const isTablet = useMediaQuery(`only screen and 
         (min-width: ${theme.grid.breakpoint.md.min}) and 
         (max-width: ${theme.grid.breakpoint.lg.max})`)
	const isDesktop = useMediaQuery(`only screen and (min-width: ${query || theme.grid.breakpoint.xl.min})`)

	return {
		isDesktop,
        isTablet,
		isMobile
	}
}

export default useIsMobile
