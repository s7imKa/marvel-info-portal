import { Component } from 'react'

import PropTypes from 'prop-types'

import './charListItem.css'

class CharListItem extends Component {
    constructor(props) {
        super(props)
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            this.props.onSelectedChar(this.props.id)
        }
    }
    render() {
        const { id, name, thumbnail, onSelectedChar, selectedChar } = this.props
        const classActive =
            selectedChar === id ? 'char-item char-item-active' : 'char-item'

        return (
            <li
                className={classActive}
                onClick={() => onSelectedChar(id)}
                onKeyDown={this.handleKeyDown} // ✅ підтримка клавіатури
                tabIndex={0} // ✅ можна фокусувати через Tab
                role='button' // ✅ семантична роль
                aria-label={`Select character ${name}`} // ✅ доступність
            >
                <img src={thumbnail} alt={name} />
                <div className='char__name'>{name}</div>
            </li>
        )
    }
}

CharListItem.PropTypes = {
    onSelectedChar: PropTypes.func.isRequired,
    selectedChar: PropTypes.number,
}

export default CharListItem
