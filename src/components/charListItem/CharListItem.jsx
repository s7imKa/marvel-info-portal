import PropTypes from 'prop-types'

import './charListItem.css'

const CharListItem = ({ id, name, thumbnail, onSelectedChar, selectedChar }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelectedChar(id)
        }
    }

    const classActive = selectedChar === id
        ? 'char-item char-item-active'
        : 'char-item'

    return (
        <li
            className={classActive}
            onClick={() => onSelectedChar(id)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role='button'
            aria-label={`Select character ${name}`}
        >
            <img src={thumbnail} alt={name} />
            <div className='char__name'>{name}</div>
        </li>
    )
}

CharListItem.PropTypes = {
    onSelectedChar: PropTypes.func.isRequired,
    selectedChar: PropTypes.number,
}

export default CharListItem
