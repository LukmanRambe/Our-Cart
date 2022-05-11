import React from 'react'
// Styles
import { Wrapper, Content, Logo } from './Navbar.styles'

const Navbar = () => {
	return (
		<Wrapper>
			<Content>
				<Logo src='/images/cart.png' />
				<h1>Our Cart</h1>
			</Content>
		</Wrapper>
	)
}

export default Navbar
