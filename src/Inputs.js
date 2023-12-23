import { FaMinusCircle } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
import Button from './Button'

const Inputs = () => {
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
				<div class='form-control'>
					<label class='cursor-pointer label gap-4'>
						<span class='label-text font-medium'>Add uppercase letters</span>
						<input
							type='checkbox'
							class='checkbox checkbox-success'
							defaultChecked
						/>
					</label>
				</div>
				<div class='form-control'>
					<label class='cursor-pointer label gap-4'>
						<span class='label-text font-medium'>Add uppercase letters</span>
						<input
							type='checkbox'
							class='checkbox checkbox-success'
							defaultChecked
						/>
					</label>
				</div>
				<div class='form-control'>
					<label class='cursor-pointer label gap-4'>
						<span class='label-text font-medium'>Add uppercase letters</span>
						<input
							type='checkbox'
							class='checkbox checkbox-success'
							defaultChecked
						/>
					</label>
				</div>
				<div class='form-control'>
					<label class='cursor-pointer label gap-4'>
						<span class='label-text font-medium'>Add uppercase letters</span>
						<input
							type='checkbox'
							class='checkbox checkbox-success'
							defaultChecked
						/>
					</label>
				</div>
			</div>
			<Button name='Generate Password' twclass='btn-primary mt-6 mb-4' />
			<div className='flex items-center justify-center gap-2 mt-8'>
				<input type='text' className='w-full max-w-md input input-bordered' />
				<Button name={'Copy Password'} twclass={'btn-secondary'} />
			</div>
		</>
	)
}

export default Inputs
