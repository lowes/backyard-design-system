import { css } from 'styled-components'

const Shapes = css`
	/** Shapes */
	&.shape {
		/** Shape - Rounded */
		&--rounded {
			border-radius: var(--bds-border-radius-lg);
		}

		/** Shape - Squared */
		&--squared {
			border-radius: 0;
		}

		/** Shape - Circle */
		&--circle {
			border-radius: var(--bds-border-radius-circle);
		}
	}
`

export { Shapes }
export default Shapes