import AppHeader from '../components/appHeader/appHeader'
import RandomChar from '../components/randomChar/randomChar'

import './App.css'

function App() {
	return (
		<div className='app'>
			<AppHeader />
			<main>
				<RandomChar/>

			</main>
		</div>
	)
}

export default App
