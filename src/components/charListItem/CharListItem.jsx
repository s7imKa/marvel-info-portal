import './charListItem.css'

const CharListItem = ({  name, thumbnail }) => {
	
	return (
		<li  className='char-item'>
			<img src={thumbnail} alt={name} />
			<div className='char__name'>{name}</div>
		</li>
	)
}
export default CharListItem
