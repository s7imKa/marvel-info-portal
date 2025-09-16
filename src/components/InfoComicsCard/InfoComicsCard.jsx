// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import useMarvelService from '../../services/MarvelService'
import Error from '../error/Error'
import Loader from '../loader/Loader'

import { useParams } from 'react-router-dom'
import './InfoComicsCard.css'

export default function InfoComicsCard() {
    const [comicsData, setComicsData] = useState(null)

    const idComicsInfo = useParams()

    const { loading, error, getComics, clearError } = useMarvelService()

    useEffect(() => {
        clearError()
        getComics(idComicsInfo.id).then(res => setComicsInfo(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setComicsInfo = comics => {
        setComicsData(comics)
    }

    const viewLoading = loading ? <Loader /> : null
    const viewError = error ? <Error /> : null
    const viewInfo =
        comicsData && !error && !loading ? <CardInfo comicsData={comicsData} /> : null

    return (
        <motion.section
            className='info-comics-section'
            initial={{ opacity: 0, y: 20, scale: 0.98 }} // трохи нижче та менше
            animate={{ opacity: 1, y: 0, scale: 1 }} // нормальний стан
            exit={{ opacity: 0, y: 10, scale: 0.98 }} // легкий підйом при виході
            transition={{ duration: 0.5, ease: 'easeOut' }} // плавно, без різких ривків
        >
            {viewLoading}
            {viewError}
            {viewInfo}
        </motion.section>
    )
}

const CardInfo = ({ comicsData }) => {
    const { thumbnail, title, description, pageCount, textObjects, price } = comicsData

    return (
        <>
            <Helmet>
                <meta name='description' content={description} />
                <title>{title}</title>
            </Helmet>
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
