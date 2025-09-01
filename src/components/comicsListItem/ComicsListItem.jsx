import './comicsListItem.css'

export default function ComicsListItem({ title, thumbnail, price }) {
    return (
        <>
            <li className='comics-item'>
                <img src={thumbnail} alt={title} />
                <h1>{title}</h1>
                <h2>{price}$</h2>
            </li>
        </>
    )
}