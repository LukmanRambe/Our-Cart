import React from 'react'
// Router
import { Link } from 'react-router-dom'
// Styles
import { Wrapper, Content, Title, Image, Button } from './Home.styles'

const Home = () => {
	return (
		<Wrapper>
			<Content>
				<Title>Our Cart</Title>
				<Image src='images/cart.png' />
				<Link to='/groceries'>
					<Button>Groceries List</Button>
				</Link>
			</Content>
		</Wrapper>
	)
}

export default Home
