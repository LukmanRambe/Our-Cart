import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
`

export const Content = styled.div`
	padding: 4rem 2rem;
	letter-spacing: 0.06em;

	.back-link {
		text-decoration: none;
		position: absolute;
		left: 6.5rem;
		top: 6rem;
		font-size: 0.8rem;
		color: var(--green);

		:hover,
		:active,
		:focus {
			transition: all 0.15s ease-in-out;
			color: var(--dark-green);
		}

		.arrow-left {
			margin-right: 0.6rem;
		}
	}

	@media only screen and (max-width: 992px) {
		.back-link {
			font-size: 0.7rem;
			left: 2rem;
		}
	}

	h3 {
		text-align: center;
		font-size: 2rem;
		color: var(--green);
		margin-bottom: 1.2rem;
		text-transform: capitalize;
	}

	form {
		display: flex;
		justify-content: center;
		gap: 1rem;
		width: 100%;
		margin-bottom: 1.5rem;

		button {
			width: 100%;
			max-width: 100px;
			border: none;
			cursor: pointer;
			color: var(--white);
			background: var(--green);
			border-radius: 0.5rem;
			transition: all 0.15s ease-in-out;

			:hover,
			:active,
			:focus {
				background: var(--dark-green);
			}
		}

		input {
			border: none;
			width: 100%;
			padding: 1rem 1.2rem;
			border-radius: 0.5rem;
		}

		@media only screen and (max-width: 600px) {
			gap: 0.5rem;

			button,
			input {
				font-size: 0.8rem;
			}
		}
	}
`

export const Items = styled.div`
	width: 100%;
	max-width: 800px;
	background: var(--white);
	border-radius: 0.5rem;
	overflow-x: auto;

	table {
		width: 100%;
		border-radius: 0.5rem;
		border-collapse: collapse;
		overflow: hidden;
		table-layout: fixed;

		thead {
			tr {
				width: 100%;

				th {
					padding: 1rem;
					font-size: 1.1rem;
					color: var(--white);
					background: var(--green);
					text-align: left;

					:not(:last-child) {
						padding-left: 3rem;
					}

					:last-child {
						text-align: center;
					}

					@media only screen and (max-width: 600px) {
						:not(:last-child) {
							padding-left: 1rem;
						}

						font-size: 0.8rem;
					}
				}
			}
		}

		tbody tr {
			:nth-child(even) {
				color: var(--dark-green);
				background: var(--gray);
			}

			:not(:last-child) {
				border-bottom: thin solid var(--gray-line);
			}
		}
	}
`

export const Item = styled.td`
	padding: 1rem;
	padding-left: 3rem;
	text-transform: capitalize;

	@media only screen and (max-width: 600px) {
		font-size: 0.8rem;
		padding-left: 1rem;
	}
`

export const Actions = styled.td`
	display: flex;
	gap: 1rem;
	padding: 1rem;

	button {
		width: 100%;
		padding: 0.5rem;
		border: none;
		cursor: pointer;
		color: var(--white);
		background: var(--green);
		border-radius: 0.5rem;

		:hover,
		:active,
		:focus {
			background: var(--dark-green);
			transition: all 0.15s ease-in-out;
		}

		&.edit-btn {
			background: var(--blue);

			:hover {
				background: var(--dark-blue);
			}
		}

		&.delete-btn {
			background: var(--red);

			:hover {
				background: var(--dark-red);
			}
		}
	}

	@media only screen and (max-width: 600px) {
		gap: 0.5rem;

		button {
			font-size: 0.8rem;
		}
	}

	@media only screen and (max-width: 400px) {
		display: flex;
		flex-direction: column;
	}
`
