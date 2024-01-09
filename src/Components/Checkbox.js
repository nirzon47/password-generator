const Checkbox = ({ name, checkbox, setCheckbox }) => {
	const handleCheckboxChange = (e) => {
		setCheckbox(!checkbox)
	}

	return (
		<div className='w-56 form-control'>
			<label className='justify-between gap-4 cursor-pointer label'>
				<span className='font-medium label-text'>{name}</span>
				<input
					type='checkbox'
					className='checkbox checkbox-success'
					checked={checkbox}
					onChange={handleCheckboxChange}
				/>
			</label>
		</div>
	)
}

export default Checkbox
