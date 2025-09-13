// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import './appHeader.css'

export default function AppHeader() {
    const pagesButton = ['Characters', 'Comics']

    return (
        <motion.header
            className='app-header'
            initial={{ opacity: 0, y: -20, scale: 0.98 }} // трохи нижче та менше
            animate={{ opacity: 1, y: 0, scale: 1 }} // нормальний стан
            exit={{ opacity: 0, y: 10, scale: 0.98 }} // легкий підйом при виході
            transition={{ duration: 0.5, ease: 'easeOut' }} // плавно, без різких ривків
        >
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
        </motion.header>
    )
}
