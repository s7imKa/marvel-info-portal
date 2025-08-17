import abyss from '../../assets/images/char-item/abyss.jpg'
import MarvelService from '../../services/MarvelService'

import { useState } from 'react'

import './charList.css'

export const CharList = () => {
	const [chars, setChars] = useState({
		cahrs: {},
		loader: true,
		eror: false
	})

	const marvelService = new MarvelService()

	const getChars = () => {
		marvelService.getAllCharacters()
			.then(res => console.log(res))
	}

	return (
		<div className='char-list'>
			<ul className='char-grid'>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
				<li className='char-item'>
					<img src={abyss} alt='abyss' />
					<div className='char__name'>Abyss</div>
				</li>
			</ul>
			<button className='button'>load more</button>
		</div>
	)
}
