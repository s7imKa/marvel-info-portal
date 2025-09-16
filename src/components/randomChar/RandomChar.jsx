// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import mjolnir from '../../assets/images/img-char-random-section/mjolnir.png'
import shield from '../../assets/images/img-char-random-section/shield.png'

import useMarvelService from '../../services/MarvelService'
import Error from '../error/Error'
import Loader from '../loader/Loader'

import '../../assets/styles/button.css'
import './randomChar.css'

const RandomChar = () => {
    const [char, setChar] = useState(null)

    const { loading, error, getCharacters, setError, clearError } = useMarvelService()

    const updataChar = () => {
        clearError()

        const max = 20
        const id = Math.floor(Math.random() * max) + 1

        getCharacters(id)
            .then(res => onCharLoaded(res))
            .catch(() => setError(true))
    }

    useEffect(() => {
        updataChar()
    }, [])

    const onCharLoaded = char => {
        setChar(char)
    }

    const errorView = error ? <Error /> : null
    const loaderView = loading ? <Loader /> : null
    const contentView = !(loading || error) ? <Char char={char} /> : null

    return (
        <motion.section
            initial={{ opacity: 0, y: 5, scale: 0.9, rotate: -1 }} // знизу, менше та трохи повернене
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} // кінцевий стан: нормальний
            exit={{ opacity: 0, y: -10, scale: 0.8, rotate: 5 }} // виліт вгору + трохи повернуто
            transition={{ duration: 0.6, ease: 'easeInOut' }} // плавна анімація
            className='random-char-section'
        >
            <div className='char-info'>
                {errorView}
                {loaderView}
                {contentView}
            </div>
            <div className='char-random'>
                <img className='mjolnir' src={mjolnir} alt='mjolnir' />
                <img className='shield' src={shield} alt='shield' />
                <div className='char-random-content'>
                    <h1>
                        Random character for today! <br />
                        Do you want to get to know him better?
                    </h1>
                    <div className='button-random-car'>
                        <h1>Or choose another one</h1>
                        <button
                            className='button'
                            onClick={updataChar}
                            disabled={loading}
                        >
                            {loading ? 'LOADING...' : 'TRY IT'}
                        </button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

const Char = ({ char }) => {
    if (!char) return null // захист від null

    const { name, description, thumbnail, homepage, wiki } = char // деструктуризація

    return (
        <>
            <img className='thumbnail' src={thumbnail} alt='img-char' /> {/* фото */}
            <div className='char-info-content'>
                <h2>{name}</h2> {/* ім'я */}
                <p>{description}</p> {/* опис */}
                <div className='button-char-info'>
                    <a href={homepage} className='button'>
                        <div className='inner'>HOMEPAGE</div>
                    </a>
                    <a href={wiki} className='button button-darck'>
                        <div className='inner'> WIKI</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default RandomChar
