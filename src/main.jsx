import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import MarvelService from './services/MarvelService.js'

import './index.css'

const marvelService = new MarvelService()

marvelService.getAllCharacters().then(res => console.log(res))

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)
