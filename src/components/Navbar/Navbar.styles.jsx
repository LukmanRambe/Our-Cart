import styled from 'styled-components'

export const Wrapper = styled.nav`
	width: 100%;
	background: var(--green);
`

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	padding: 1rem 6rem;
	letter-spacing: 0.07em;

	h1 {
		font-size: 2rem;
		color: var(--white);
	}

	@media only screen and (max-width: 600px) {
		padding: 1rem 3rem;

		h1 {
			font-size: 1.7rem;
		}
	}

	@media only screen and (max-width: 992px) {
		padding: 1rem 2rem;
	}
`

export const Logo = styled.img`
	height: 100%;
	max-height: 50px;
`
