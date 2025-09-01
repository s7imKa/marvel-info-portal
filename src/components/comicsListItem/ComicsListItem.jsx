import './comicsListItem.css'

export default function ComicsListItem({ id, title, thumbnail, price, onClick }) {
    return (
        <>
            <li className='comics-item' onClick={() => onClick(id)}>
                <img src={thumbnail} alt={title} />
                <h1>{title}</h1>
                <h2>{price}$</h2>
            </li>
        </>
    )
}
