// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import useMarvelService from '../../services/MarvelService'
import Error from '../error/Error'
import Loader from '../loader/Loader'

import { useParams } from 'react-router-dom'
import '../InfoComicsCard/InfoComicsCard.css'
import { AppBanner } from '../layout/appBanner/AppBanner'

export default function InfoCharCard() {
    const [charData, setCharData] = useState(null)

    const idChar = useParams()

    const { loading, error, getCharacters, clearError } = useMarvelService()

    useEffect(() => {
        clearError()
        getCharacters(idChar.id).then(res => setCharInfo(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setCharInfo = comics => {
        setCharData(comics)
    }

    const viewLoading = loading ? <Loader /> : null
    const viewError = error ? <Error /> : null
    const viewInfo =
        charData && !error && !loading ? <CardInfo charData={charData} /> : null

    return (
        <>
            <AppBanner />

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
        </>
    )
}

const CardInfo = ({ charData }) => {
    const { name, description, thumbnail } = charData

    return (
        <>
            <Helmet>
                <meta name='description' content={description} />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className='info-comics-img' />
            <div className='info-comics-content'>
                <Link to={'/'} className='info-comics-back'>
                    Back to all
                </Link>
                <h2 className='info-comics-title'>{name}</h2>
                <p className='info-comics-desc'>{description}</p>
            </div>
        </>
    )
}
