import { Link } from 'react-router-dom'

import './comicsListItem.css'

export default function ComicsListItem({ id, title, thumbnail, price }) {
    return (
        <>
            <li className='comics-item'>
                <Link to={`/comics/${id}`}>
                    <img src={thumbnail} alt={title} />
                    <h1>{title}</h1>
                    <h2>{price}$</h2>
                </Link>
            </li>
        </>
    )
}
