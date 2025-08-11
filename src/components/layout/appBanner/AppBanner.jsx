import './appBanner.css'

import avangardLogo from '../../../assets/images/banner/Avengers-logo.png'
import avangard from '../../../assets/images/banner/Avengers.png'

export const AppBanner = () => {
	return (
		<div className='banner'>
			<div className='banner-content'>
				<img className='avangard' src={avangard} alt='avangard' />
				<h1>
					New comics every week! <br />
					Stay tuned!
				</h1>
			</div>
			<img className='avangardLogo' src={avangardLogo} alt='avangardLogo' />
		</div>
	)
}
