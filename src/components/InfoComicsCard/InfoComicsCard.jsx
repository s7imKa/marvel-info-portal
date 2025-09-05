import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import useMarvelService from '../../services/MarvelService'
import Error from '../error/Error'
import Loader from '../loader/Loader'

import { useParams } from 'react-router-dom'
import './InfoComicsCard.css'

export default function InfoComicsCard() {
    const [comicsData, setComicsData] = useState(null)
    const idComicsInfo = useParams()

    const { loading, error, getComics } = useMarvelService()

    const setComicsInfo = comics => {
        setComicsData(comics)
    }
    useEffect(() => {
        getComics(idComicsInfo.id).then(res => setComicsInfo(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const viewLoading = loading ? <Loader /> : null
    const viewError = error ? <Error /> : null
    const viewInfo =
        comicsData && !error && !loading ? <CardInfo comicsData={comicsData} /> : null

    return (
        <section className='info-comics-section'>
            {viewLoading}
            {viewError}
            {viewInfo}
        </section>
    )
}

const CardInfo = ({ comicsData }) => {
    const { thumbnail, title, description, pageCount, textObjects, price } = comicsData

    return (
        <>
            <img src={thumbnail} alt={title} className='info-comics-img' />
            <div className='info-comics-content'>
                <Link to={'/comics'} className='info-comics-back'>
                    Back to all
                </Link>
                <h2 className='info-comics-title'>{title}</h2>
                <p className='info-comics-desc'>{description}</p>
                <div className='info-comics-pages'>{pageCount} pages</div>
                <div className='info-comics-lang'> Language: {textObjects}</div>
                <div className='info-comics-price'>{price}$</div>
            </div>
        </>
    )
}
