import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTrashCan,
	faPenToSquare,
	faAdd,
	faLongArrowLeft
} from '@fortawesome/free-solid-svg-icons'
// Styles
import { Wrapper, Content, Items, Item, Actions } from './GroceryDetail.styles'

const GroceryDetail = ({ groceries, setGroceries, isEditing, setIsEditing }) => {
	const [itemNameInput, setItemNameInput] = useState('')
	const [itemQuantityInput, setItemQuantityInput] = useState('')
	const [currentGrocery, setCurrentGrocery] = useState({
		id: '',
		name: '',
		items: []
	})
	const [currentItem, setCurrentItem] = useState({})

	useEffect(() => {
		const newGrocery = groceries.find(grocery => grocery.id === id)
		setCurrentGrocery(newGrocery)
	}, [])

	useEffect(() => {
		setGroceries(prevState => {
			const newArray = []

			for (let i = 0; i < prevState.length; i++) {
				const oldGrocery = prevState[i]
				oldGrocery.id === currentGrocery.id
					? newArray.unshift({ ...currentGrocery })
					: newArray.push(oldGrocery)
			}

			return newArray
		})
	}, [currentGrocery, setGroceries])

	const { id } = useParams()
	const itemNameInputRef = useRef()
	const itemQuantityInputRef = useRef()

	const handleChange = () => {
		setItemNameInput(itemNameInputRef.current.value)
		setItemQuantityInput(itemQuantityInputRef.current.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (itemNameInput.trim() !== '' && itemQuantityInput.trim() !== '') {
			if (isEditing) {
				const newItem = currentGrocery.items.map(item =>
					item.id === currentItem.id
						? { ...item, name: itemNameInput, quantity: itemQuantityInput }
						: item
				)

				setCurrentGrocery(prevState => {
					return { ...prevState, items: newItem }
				})
			} else {
				setCurrentGrocery(prevState => {
					const newItem = {
						id: nanoid(),
						name: itemNameInput.trim().toLowerCase(),
						quantity: itemQuantityInput.trim().toLowerCase()
					}

					return { ...prevState, items: [...prevState.items, newItem] }
				})
			}
		}

		setItemNameInput('')
		setItemQuantityInput('')
		setIsEditing(false)
	}

	const handleEdit = item => {
		setIsEditing(true)
		setCurrentItem({ ...item })
		setItemNameInput(item.name)
		setItemQuantityInput(item.quantity)
	}

	const handleDelete = (event, itemId) => {
		event.stopPropagation()

		setCurrentGrocery(currentGrocery => {
			const newItems = currentGrocery.items.filter(item => item.id !== itemId)

			return { ...currentGrocery, items: [...newItems] }
		})
	}

	const items = currentGrocery.items.map(item => {
		return (
			<tr key={item.id}>
				<Item>{item.name}</Item>
				<Item className='quantity'>{item.quantity}</Item>
				<Actions>
					<button className='edit-btn' onClick={() => handleEdit(item)}>
						<FontAwesomeIcon icon={faPenToSquare} className='arrow-up' />
					</button>
					<button className='delete-btn' onClick={e => handleDelete(e, item.id)}>
						<FontAwesomeIcon icon={faTrashCan} className='arrow-up' />
					</button>
				</Actions>
			</tr>
		)
	})

	return (
		<Wrapper>
			<Content>
				<Link to='/groceries' className='back-link'>
					<FontAwesomeIcon icon={faLongArrowLeft} className='arrow-left' />
					Back to Groceries List
				</Link>
				<h3>{currentGrocery.name}</h3>
				<form onSubmit={handleSubmit}>
					<input
						ref={itemNameInputRef}
						type='text'
						placeholder='Add Item'
						value={itemNameInput}
						onChange={handleChange}
					/>
					<input
						ref={itemQuantityInputRef}
						type='text'
						placeholder='Quantity'
						value={itemQuantityInput}
						onChange={handleChange}
					/>
					<button type='submit'>
						{isEditing ? (
							<FontAwesomeIcon icon={faPenToSquare} className='arrow-up' />
						) : (
							<FontAwesomeIcon icon={faAdd} className='arrow-up' />
						)}
					</button>
				</form>
				<Items>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Quantity</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<>{items}</>
						</tbody>
					</table>
				</Items>
			</Content>
		</Wrapper>
	)
}

export default GroceryDetail
