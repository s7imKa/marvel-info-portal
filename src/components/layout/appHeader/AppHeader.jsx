import { Link, NavLink } from 'react-router-dom'
import './appHeader.css'

export default function AppHeader() {
    const pagesButton = ['Characters', 'Comics']

    return (
        <header className='app-header'>
            <h1 className='header-logo'>
                <Link to='/'>
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className='header-menu'>
                <ul>
                    {pagesButton.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item === 'Characters' ? '/' : '/comics'}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
