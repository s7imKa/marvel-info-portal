import { useNavigate } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div className='notfound-container'>
            <h2 className='notfound-title'>404</h2>
            <p className='notfound-text'>
                Сторінку не знайдено.
                <br />
                <br />
                <br />
                Вибачте, такої сторінки не існує.
            </p>
            <button className='notfound-btn' onClick={() => navigate('/')}>
                На головну
            </button>
        </div>
    )
}
