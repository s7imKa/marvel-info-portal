import './charListItem.css'

const CharListItem = ({ id, name, thumbnail, onSelectedChar, selectedChar }) => {
    const classActive = selectedChar === id ? 'char-item char-item-active' : 'char-item'
    return (
        <li className={classActive} onClick={() => onSelectedChar(id)}>
            <img src={thumbnail} alt={name} />
            <div className='char__name'>{name}</div>
        </li>
    )
}
export default CharListItem
