import { FaMinusCircle } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'

import Button from './Button'
import Checkbox from './Checkbox'

import generator from './generator'

import { useState } from 'react'

const Inputs = () => {
	const [password, setPassword] = useState('')
	const [limit, setLimit] = useState(12)

	/**
	 * Handles increasing the limit.
	 *
	 * @return {undefined} There is no return value.
	 */
	const handleIncreaseLimit = () => {
		if (limit < 128) {
			setLimit((prev) => Number(prev) + 1)
		} else {
			alert('Password length cannot be greater than 128')
			setLimit(128)
		}
	}

	/**
	 * Decreases the limit value by 1 if it is greater than 1. If the limit value is 1 or less, it displays an alert message and sets the limit value to 1.
	 *
	 * @return {undefined} No return value
	 */
	const handleDecreaseLimit = () => {
		if (limit > 1) {
			setLimit((prev) => Number(prev) - 1)
		} else {
			alert('Password length cannot be less than 1')
			setLimit(1)
		}
	}

	/**
	 * Handles the change event for the limit input field.
	 *
	 * @param {Object} e - The event object.
	 * @return {void} This function does not return anything.
	 */
	const handleOnLimitChange = (e) => {
		if (Number(e.target.value) > 128) {
			alert('Password length cannot be greater than 128')
			setLimit(128)
		} else if (Number(e.target.value) < 1) {
			alert('Password length cannot be less than 1')
			setLimit(1)
		} else {
			setLimit(Number(e.target.value))
		}
	}

	/**
	 * Generates a password.
	 *
	 * @param {type} limit - the limit of the generated password
	 * @return {type} the generated password
	 */
	const generatePassword = () => {
		const generatedPassword = generator(limit)
		setPassword(generatedPassword)
	}

	/**
	 * Copies the password to the clipboard.
	 *
	 * @param {type} password - the password to be copied
	 * @return {type} undefined
	 */
	const copyPassword = () => {
		navigator.clipboard.writeText(password)
	}

	return (
		<>
			<h2 className='mb-4 font-medium font-lg'>Choose a password length</h2>
			<div className='flex gap-4 mb-4'>
				<button
					className='w-12 font-bold btn btn-error'
					onClick={handleDecreaseLimit}
				>
					<FaMinusCircle />
				</button>
				<input
					type='number'
					inputMode='numeric'
					id='length'
					className='input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 text-center font-bold'
					min='0'
					max={'128'}
					value={limit}
					onChange={handleOnLimitChange}
				/>
				<button
					className='w-12 font-bold btn btn-success'
					onClick={handleIncreaseLimit}
				>
					<FaPlusCircle />
				</button>
			</div>
			<div className='flex flex-row flex-wrap items-center justify-center max-w-lg gap-x-16'>
				<Checkbox name='Add lowercase letters' id='lowercaseCheck' />
				<Checkbox name='Add uppercase letters' id='uppercaseCheck' />
				<Checkbox name='Add numbers' id='numbersCheck' />
				<Checkbox name='Add symbols' id='symbolsCheck' />
			</div>
			<Button
				name='Generate Password'
				twclass='btn-primary mt-6 mb-4'
				onClick={generatePassword}
			/>
			<div className='flex flex-wrap items-center justify-center gap-2 mt-8'>
				<input
					type='text'
					className='input input-bordered'
					defaultValue={password}
					readOnly
				/>
				<Button
					name={'Copy Password'}
					twclass={'btn-secondary'}
					onClick={copyPassword}
				/>
			</div>
		</>
	)
}

export default Inputs
