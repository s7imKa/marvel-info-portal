import './appHeader.css'

export default function AppHeader() {
	return (
		<header className='app-header'>
			<div className='app-header-content'>
				<h1 className='header-logo'>
					<a href='#'>
						<span>Marvel</span> information portal
					</a>
				</h1>
				<nav className='app__menu'>
					<ul>
						<li>
							<a href='#'>Characters</a>
						</li>
						/
						<li>
							<a href='#'>Comics</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
