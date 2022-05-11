import styled from 'styled-components'

export const Wrapper = styled.main`
	display: flex;
	justify-content: center;
`

export const Content = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	letter-spacing: 0.07em;
	font-size: 0.9rem;
	padding: 2rem;

	.detail-link {
		text-decoration: none;
		color: var(--green);
		width: 100%;

		:hover,
		:active,
		:focus {
			color: var(--white);
		}
	}

	form {
		width: 100%;
		max-width: 800px;
		display: flex;
		gap: 1rem;

		button {
			width: 100%;
			max-width: 115px;
			border: none;
			cursor: pointer;
			color: var(--white);
			background: var(--green);
			border-radius: 0.5rem;

			:hover,
			:active,
			:focus {
				transition: all 0.15s ease-in-out;
				background: var(--dark-green);
			}
		}

		input {
			width: 100%;
			padding: 1.5rem;
			border: none;
			border-radius: 0.5rem;
			background: var(--white);

			@media only screen and (max-width: 400px) {
				padding: 1.3rem;
				font-size: 0.8rem;
			}
		}

		@media only screen and (max-width: 400px) {
			gap: 0.5rem;
		}
	}

	@media only screen and (max-width: 400px) {
		font-size: 0.8rem;
	}
`

export const Heading = styled.h3`
	text-align: center;
	font-size: 2rem;
	color: var(--green);
	margin-bottom: 1.2rem;

	@media only screen and (max-width: 400px) {
		font-size: 1.7rem;
	}
`

export const GroceryContainer = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;
	max-width: 800px;

	@media only screen and (max-width: 400px) {
		gap: 0.5rem;
	}
`

export const Actions = styled.div`
	display: flex;
	gap: 0.3rem;

	button {
		width: 100%;
		max-width: 100px;
		border: none;
		padding: 1rem 1.35rem;
		cursor: pointer;
		color: var(--white);
		background: var(--green);
		border-radius: 0.5rem;

		:hover,
		:active,
		:focus {
			transition: all 0.15s ease-in-out;
		}

		@media only screen and (max-width: 400px) {
			padding: 0.9rem 1rem;
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
`

export const Grocery = styled.div`
	padding: 1.5rem;
	border-radius: 0.5rem;
	background: var(--white);
	text-transform: capitalize;

	:hover {
		transition: all 0.15s ease-in-out;
		background: var(--green);
	}

	@media only screen and (max-width: 400px) {
		padding: 1.3rem;
	}
`
