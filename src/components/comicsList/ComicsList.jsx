import comics from '../../assets/images/comics/x-men.png'

import '../../assets/styles/button.css'
import './comicsList.css'

export const ComicsList = () => {
	return (
		<div className='comics-list'>
			<ul className='comics-grid'>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
				<li className='comics-item'>
					<img src={comics} alt='comics' />
					<h1>X-Men: Days of Future Past</h1>
					<h2>99$</h2>
				</li>
			</ul>

			<button className='button'> LOAD MORE</button>
		</div>
	)
}
