import React, { useState, useEffect } from 'react'
// Router
import { Routes, Route, useMatch } from 'react-router-dom'
// Components
import Home from './components/Home'
import Navbar from './components/Navbar'
import Groceries from './components/Groceries'
import GroceryDetail from './components/GroceryDetail'
// Styles
import GlobalStyle from './GlobalStyle'

const App = () => {
	const [groceries, setGroceries] = useState(
		() => JSON.parse(localStorage.getItem('GROCERIES')) || []
	)
	const [groceryName, setGroceryName] = useState('')
	const [isEditing, setIsEditing] = useState(false)

	useEffect(() => {
		localStorage.setItem('GROCERIES', JSON.stringify(groceries))
	}, [groceries])

	return (
		<>
			{!useMatch('/') && <Navbar />}
			<Routes>
				<Route index path='/' element={<Home />}></Route>
				<Route
					path='/groceries'
					element={
						<Groceries
							groceries={groceries}
							setGroceries={setGroceries}
							groceryName={groceryName}
							setGroceryName={setGroceryName}
							isEditing={isEditing}
							setIsEditing={setIsEditing}
						/>
					}></Route>
				<Route
					path='/groceries/groceryDetail/:id'
					element={
						<GroceryDetail
							groceries={groceries}
							setGroceries={setGroceries}
							isEditing={isEditing}
							setIsEditing={setIsEditing}
						/>
					}></Route>
			</Routes>
			<GlobalStyle />
		</>
	)
}

export default App
