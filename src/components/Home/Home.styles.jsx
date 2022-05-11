import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 4rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		padding: 0;
	}
`

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	width: 50vw;
`

export const Title = styled.h1`
	font-size: 3.5rem;
	letter-spacing: 0.05em;
	color: var(--green);

	@media only screen and (max-width: 600px) {
		font-size: 2.2rem;
	}
`

export const Image = styled.img`
	width: 100%;
	max-width: 420px;
	margin-left: -3.8rem;

	@media only screen and (max-width: 768px) {
		margin-left: -1.8rem;
	}

	@media only screen and (max-width: 600px) {
		margin-left: -1.2rem;
	}
`

export const Button = styled.button`
	border: none;
	cursor: pointer;
	font-size: 1.2rem;
	color: var(--white);
	background: var(--green);
	border-radius: 1.2rem;
	padding: 1.2rem 6rem;
	font-weight: 700;
	letter-spacing: 0.05em;

	:hover,
	:active,
	:focus {
		background: var(--dark-green);
		transition: all 0.15s ease-in-out;
	}

	@media only screen and (max-width: 600px) {
		font-size: 0.8rem;
		padding: 1rem 3rem;
	}
`
