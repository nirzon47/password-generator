import { FaMinusCircle } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'

import Button from './Button'
import Checkbox from './Checkbox'

import { useState } from 'react'

const Inputs = () => {
	const [password, setPassword] = useState('')

	return (
		<>
			<h2 className='mb-4 font-medium font-lg'>Choose a password length</h2>
			<div className='flex gap-4 mb-4'>
				<button className='w-12 font-bold btn btn-error'>
					<FaMinusCircle />
				</button>
				<input
					type='number'
					inputMode='numeric'
					id='length'
					className='input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 text-center font-bold'
					min='0'
					max={'128'}
					defaultValue={'12'}
				/>
				<button className='w-12 font-bold btn btn-success'>
					<FaPlusCircle />
				</button>
			</div>
			<div className='flex flex-row flex-wrap items-center justify-center max-w-lg gap-x-16'>
				<Checkbox name='Add lowercase letters' />
				<Checkbox name='Add uppercase letters' />
				<Checkbox name='Add numbers' />
				<Checkbox name='Add symbols' />
			</div>
			<Button name='Generate Password' twclass='btn-primary mt-6 mb-4' />
			<div className='flex flex-wrap items-center justify-center gap-2 mt-8'>
				<input
					type='text'
					className='input input-bordered'
					defaultValue={password}
				/>
				<Button name={'Copy Password'} twclass={'btn-secondary'} />
			</div>
		</>
	)
}

export default Inputs
