import './appHeader.css'

export default function AppHeader({ changePage, stateButton }) {
	const pagesButton = ['Characters', 'Comics']

	return (
		<header className='app-header'>
			<h1 className='header-logo'>
				<a href='#'>
					<span>Marvel</span> information portal
				</a>
			</h1>
			<nav className='header-menu'>
				<ul>
					{pagesButton.map((item, index) => (
						<li key={index}>
							<a
								href='#'
								className={stateButton === item ? 'active' : ''}
								onClick={e => {
									e.preventDefault()
									changePage(item)
								}}
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
