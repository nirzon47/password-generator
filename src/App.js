import Inputs from './Inputs'

const App = () => {
	return (
		<div className='flex flex-col items-center min-h-screen p-12'>
			<h1 className='mb-8 text-3xl font-bold text-center'>
				Password Generator
			</h1>
			<Inputs />
		</div>
	)
}

export default App
