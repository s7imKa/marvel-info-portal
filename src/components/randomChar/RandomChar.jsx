import thumbnailImg from '../../assets/images/img-char-random-section/Thumbnail.jpg'
import mjolnir from '../../assets/images/img-char-random-section/mjolnir.png'
import shield from '../../assets/images/img-char-random-section/shield.png'

import '../../assets/styles/button.css'
import './randomChar.css'

export default function RandomChar() {
	return (
		<section className='random-char-section'>
			<div className='char-info'>
				<img src={thumbnailImg} alt='img-char' />
				<div className='char-info-content'>
					<h2>THOR</h2>
					<p>
						As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever
						made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled,
						oafish imbecile, he's quite smart and compassionate...
					</p>
					<div className='button-char-info'>
						<button className='button'>HOMEPAGE</button>
						<button style={{ backgroundColor: 'var(--button-grey)'}} className='button'>
							WIKI
						</button>
					</div>
				</div>
			</div>

			<div className='char-random'>
				<img className='mjolnir' src={mjolnir} alt='mjolnir' />
				<img className='shield' src={shield} alt='shield' />
				<div className='char-random-content'>
					<h1>
						Random character for today! <br />
						Do you want to get to know him better?
					</h1>
					<div className='button-random-car'>
						<h1>Or choose another one</h1>
						<button className='button'>TRY IT</button>
					</div>
				</div>
			</div>
		</section>
	)
}
