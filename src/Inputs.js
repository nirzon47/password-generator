const Inputs = () => {
	return (
		<>
			<h2 className='mb-4 font-lg font-medium'>Choose a password length</h2>
			<div className='flex gap-4'>
				<button className='btn btn-error w-12'>-</button>
				<input
					type='number'
					inputMode='numeric'
					id='length'
					className='input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 text-center font-bold'
					min='0'
					max={'128'}
					defaultValue={'12'}
				/>
				<button className='btn btn-success w-12'>+</button>
			</div>
		</>
	)
}

export default Inputs
