import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTrashCan,
	faPenToSquare,
	faCalendarPlus
} from '@fortawesome/free-solid-svg-icons'
// Styles
import {
	Wrapper,
	Content,
	GroceryContainer,
	Grocery,
	Actions,
	Heading
} from './Groceries.styles'

const Groceries = ({
	groceries,
	setGroceries,
	groceryName,
	setGroceryName,
	isEditing,
	setIsEditing
}) => {
	const [currentGrocery, setCurrentGrocery] = useState({})
	const navigate = useNavigate()
	const nameRef = useRef()

	const handleChange = () => {
		setGroceryName(nameRef.current.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (groceryName.trim() !== '') {
			if (isEditing) {
				const newGrocery = groceries.map(grocery =>
					grocery.id === currentGrocery.id
						? { ...grocery, name: groceryName }
						: grocery
				)

				setGroceries(newGrocery)
			} else {
				const groceriesObject = {
					id: nanoid(),
					name: groceryName.trim().toLowerCase(),
					items: []
				}

				setGroceries(prevState => [...prevState, groceriesObject])
				navigate(`groceryDetail/${groceriesObject.id}`)
			}
		}

		setGroceryName('')
		setIsEditing(false)
	}

	const handleEdit = grocery => {
		setIsEditing(true)
		setCurrentGrocery({ ...grocery })
		setGroceryName(grocery.name)
	}

	const handleDelete = itemId => {
		setGroceries(prevState => {
			const newGroceries = prevState.filter(grocery => grocery.id !== itemId)

			return newGroceries
		})
	}

	const groceriesList = groceries.map(grocery => {
		return (
			<GroceryContainer key={grocery.id}>
				<Link to={`groceryDetail/${grocery.id}`} className='detail-link'>
					<Grocery>
						<p>{grocery.name}</p>
					</Grocery>
				</Link>
				<Actions>
					<button className='edit-btn' onClick={() => handleEdit(grocery)}>
						<FontAwesomeIcon icon={faPenToSquare} className='arrow-up' />
					</button>
					<button className='delete-btn' onClick={() => handleDelete(grocery.id)}>
						<FontAwesomeIcon icon={faTrashCan} className='arrow-up' />
					</button>
				</Actions>
			</GroceryContainer>
		)
	})

	return (
		<Wrapper>
			<Content>
				<Heading>Groceries List</Heading>
				<form onSubmit={handleSubmit}>
					<input
						ref={nameRef}
						type='text'
						placeholder={isEditing ? groceryName : 'Create new list'}
						value={groceryName}
						onChange={handleChange}
						autoFocus
					/>

					<button type='submit'>
						{isEditing ? (
							<FontAwesomeIcon icon={faPenToSquare} className='arrow-up' />
						) : (
							<FontAwesomeIcon icon={faCalendarPlus} className='arrow-up' />
						)}
					</button>
				</form>
				<>{groceriesList}</>
			</Content>
		</Wrapper>
	)
}

export default Groceries
