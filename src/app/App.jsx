import AppHeader from '../components/layout/appHeader/AppHeader'
// import RandomChar from '../components/randomChar/RandomChar'
// import SectionCharPanel from '../components/sectionCharPanel/SectionCharPanel'

import { SectionComicsPanel } from '../components/sectionComicsPanel/sectionComicsPanel'

import './App.css'

function App() {
	return (
		<div className='app'>
			<AppHeader />
			<main>
				{/* <RandomChar/>
				<SectionCharPanel/> */}

				<SectionComicsPanel/>

			</main>
		</div>
	)
}

export default App
