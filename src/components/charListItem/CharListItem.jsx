import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import './charListItem.css'

const CharListItem = ({ id, name, thumbnail, onSelectedChar, selectedChar }) => {
    const handleKeyDown = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelectedChar(id)
        }
    }

    const classActive = selectedChar === id ? 'char-item char-item-active' : 'char-item'

    return (
        <motion.li
            initial={{ opacity: 0, y: -30, scale: 0.90 }} // трохи нижче та менше
            animate={{ opacity: 1, y: 0, scale: 1 }} // нормальний стан
            exit={{ opacity: 0, y: 10, scale: 0.98 }} // легкий підйом при виході
            transition={{ duration: 0.5, ease: 'easeOut' }} // плавно, без різких ривків
            className={classActive}
            onClick={() => onSelectedChar(id)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role='button'
            aria-label={`Select character ${name}`}
        >
            <img src={thumbnail} alt={name} />
            <div className='char__name'>{name}</div>
        </motion.li>
    )
}

CharListItem.PropTypes = {
    onSelectedChar: PropTypes.func.isRequired,
    selectedChar: PropTypes.number,
}

export default CharListItem
