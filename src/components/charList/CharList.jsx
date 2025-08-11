import abyss from '../../assets/images/char-item/abyss.jpg'

import './charList.css'

export const CharList = () => {
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
