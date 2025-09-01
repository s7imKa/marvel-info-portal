import { useEffect, useState } from 'react'
import useMarvelService from '../../services/MarvelService'
import Error from '../error/Error'
import Loader from '../loader/Loader'

import './InfoComicsCard.css'

export default function InfoComicsCard({ onInfoAllComics, idComicsInfo }) {
    const [comicsData, setComicsData] = useState(null)

    const { loading, error, getComics } = useMarvelService()

    const setComicsInfo = comics => {
        setComicsData(comics)
    }
    useEffect(() => {
        getComics(idComicsInfo).then(res => setComicsInfo(res))
    }, [])

    const viewLoading = loading ? <Loader /> : null
    const viewError = error ? <Error /> : null
    const viewInfo =
        comicsData && !error && !loading ? (
            <CardInfo
                onInfoAllComics={onInfoAllComics}
                comicsData={comicsData}
                setComicsInfo={setComicsInfo}
            />
        ) : null

    return (
        <section className='info-comics-section'>
            {viewLoading}
            {viewError}
            {viewInfo}
        </section>
    )
}

const CardInfo = ({ onInfoAllComics, comicsData, setComicsInfo }) => {
    const { thumbnail, title, description, pageCount, textObjects, price } = comicsData

    return (
        <>
            <img src={thumbnail} alt={title} className='info-comics-img' />
            <div className='info-comics-content'>
                <a
                    href='#'
                    className='info-comics-back'
                    onClick={e => {
                        e.preventDefault()
                        onInfoAllComics()
                        setComicsInfo(null)
                    }}
                >
                    Back to all
                </a>
                <h2 className='info-comics-title'>{title}</h2>
                <p className='info-comics-desc'>{description}</p>
                <div className='info-comics-pages'>{pageCount} pages</div>
                <div className='info-comics-lang'> Language: {textObjects}</div>
                <div className='info-comics-price'>{price}$</div>
            </div>
        </>
    )
}
