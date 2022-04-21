import { css } from 'styled-components'

const Sizes = css`
	/** Sizes */
	&.size {
		/** Small */
		&--small {
			min-height: var(--bds-sizes-size-40);
			padding: 0 var(--bds-sizes-size-20);

			.btn-label {
				font-size: var(--bds-sizes-size-12);
				line-height: var(--bds-sizes-size-16);
			}

			.btn-label .btn-start-icon,
			.btn-label .btn-end-icon,
			.btn-label .icon {
				width: var(--bds-sizes-size-12);
				height: var(--bds-sizes-size-12);
			}
		}

		/** Medium */
		&--medium {
			min-height: var(--bds-sizes-size-48);
			padding: 0 var(--bds-sizes-size-32);

			.btn-label {
				font-size: var(--bds-sizes-size-14);
				line-height: var(--bds-sizes-size-24);
			}

			.btn-label .btn-start-icon,
			.btn-label .btn-end-icon,
			.btn-label .icon {
				width: var(--bds-sizes-size-14);
				height: var(--bds-sizes-size-14);
			}
		}

		/** Large */
		&--large {
			min-height: var(--bds-sizes-size-56);
			padding: 0 var(--bds-sizes-size-32);

			.btn-label {
				font-size: var(--bds-sizes-size-16);
				line-height: var(--bds-sizes-size-24);
			}

			.btn-label .btn-start-icon,
			.btn-label .btn-end-icon,
			.btn-label .icon {
				width: var(--bds-sizes-size-16);
				height: var(--bds-sizes-size-16);
			}
		}

		/** Jumbo */
		&--jumbo {
			min-height: var(--bds-sizes-size-96);
			padding: 0 var(--bds-sizes-size-56);

			.btn-label {
				font-size: var(--bds-sizes-size-24);
				line-height: var(--bds-sizes-size-40);
			}

			.btn-label .btn-start-icon,
			.btn-label .btn-end-icon,
			.btn-label .icon {
				width: var(--bds-sizes-size-24);
				height: var(--bds-sizes-size-24);
			}
		}
	}

	@media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
		&.size {
			&--small {
				.btn-label {
					font-size: var(--bds-sizes-size-14);
				}

				.btn-label .btn-start-icon,
				.btn-label .btn-end-icon,
				.btn-label .icon {
					width: var(--bds-sizes-size-14);
					height: var(--bds-sizes-size-14);
				}
			}

			&--medium {
				.btn-label {
					font-size: var(--bds-sizes-size-16);
				}

				.btn-label .btn-start-icon,
				.btn-label .btn-end-icon,
				.btn-label .icon {
					width: var(--bds-sizes-size-16);
					height: var(--bds-sizes-size-16);
				}
			}

			&--large {
				.btn-label {
					font-size: var(--bds-sizes-size-18);
				}

				.btn-label .btn-start-icon,
				.btn-label .btn-end-icon,
				.btn-label .icon {
					width: var(--bds-sizes-size-18);
					height: var(--bds-sizes-size-18);
				}
			}

			/** Jumbo */
			&--jumbo {
				.btn-label {
					font-size: var(--bds-sizes-size-28);
				}

				.btn-label .btn-start-icon,
				.btn-label .btn-end-icon,
				.btn-label .icon {
					width: var(--bds-sizes-size-28);
					height: var(--bds-sizes-size-28);
				}
			}
		}
	}
`

export { Sizes }
export default Sizes
