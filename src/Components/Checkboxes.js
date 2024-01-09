import Checkbox from './Checkbox'

const Checkboxes = ({
	uppercaseCheckbox,
	lowercaseCheckbox,
	numbersCheckbox,
	symbolsCheckbox,
	setUppercaseCheckbox,
	setLowercaseCheckbox,
	setNumbersCheckbox,
	setSymbolsCheckbox,
}) => {
	return (
		<div className='flex flex-row flex-wrap items-center justify-center max-w-lg gap-x-16'>
			<Checkbox
				name='Add lowercase letters'
				checkbox={lowercaseCheckbox}
				setCheckbox={setLowercaseCheckbox}
			/>
			<Checkbox
				name='Add uppercase letters'
				checkbox={uppercaseCheckbox}
				setCheckbox={setUppercaseCheckbox}
			/>
			<Checkbox
				name='Add numbers'
				checkbox={numbersCheckbox}
				setCheckbox={setNumbersCheckbox}
			/>
			<Checkbox
				name='Add symbols'
				checkbox={symbolsCheckbox}
				setCheckbox={setSymbolsCheckbox}
			/>
		</div>
	)
}

export default Checkboxes
