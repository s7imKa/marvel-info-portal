import abyss from '../../assets/images/char-item/abyss.jpg'

import './charInfo.css'

export const CharInfo = () => {
	return (
		<div className='char--info'>
			<div className='char--basics'>
				<img src={abyss} alt='abyss' />
				<div className='char--info-content'>
					<h2>LOKI</h2>
					<div className='char-btns'>
						<a href='#' className='button' style={{ marginBottom: '10px' }}>
							<div className='inner'>HOMEPAGE</div>
						</a>
						<a href='#' className='button button-darck'>
							<div className='inner'> WIKI</div>
						</a>
					</div>
				</div>
			</div>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati necessitatibus
				nobis nisi, sapiente facilis eveniet, quidem rerum minus illum consequuntur. Eveniet ipsum
				fuga reiciendis aut ex, autem veniam minima!
			</p>
			<div className='char-comics'>
				<h3>Comics: </h3>
			</div>
			<ul className='char-comics-list'>
				<li className='char-comics-item'>All-Winners Squad: Band of Heroes (2011) #3</li>
				<li className='char-comics-item'>All-Winners Squad: Band of Heroes (2011) #3</li>
				<li className='char-comics-item'>All-Winners Squad: Band of Heroes (2011) #3</li>
				<li className='char-comics-item'>All-Winners Squad: Band of Heroes (2011) #3</li>
				<li className='char-comics-item'>All-Winners Squad: Band of Heroes (2011) #3</li>
	
			</ul>
		</div>
	)
}
