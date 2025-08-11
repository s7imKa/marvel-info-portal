import './appHeader.css'

export default function AppHeader() {
	return (
		<header className='app-header'>
			<h1 className='header-logo'>
				<a href='#'>
					<span>Marvel</span> information portal
				</a>
			</h1>
			<nav className='header-menu'>
				<ul>
					<li>
						<a href='#'>
							<span>Characters</span>
						</a>
					</li>
					/
					<li>
						<a href='#'>Comics</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
