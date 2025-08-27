import { useEffect, useMemo, useState } from 'react'

import Error from '../error/Error'
import Loader from '../loader/Loader'
import Skeleton from '../skeleton/Skeleton'

import MarvelService from '../../services/MarvelService'

import './charInfo.css'

const CharInfo = ({ charId }) => {
    const [char, setChar] = useState(null)
    const [loader, setLodear] = useState(false)
    const [error, setError] = useState(false)

    const marvelService = useMemo(() => new MarvelService(), [])

    useEffect(() => {
        const updateChar = () => {
            if (!charId) {
                return
            }

            // Скидаємо error стан при новому запиті
            setLodear(true)
            setError(false)

            marvelService
                .getCharacters(charId)
                .then((res) => onCharLoaded(res))
                .catch(() => onError())
        }

        updateChar()
    }, [charId, marvelService])

    const onCharLoaded = (char) => {
        setChar(char)
        setLodear(false)
        setError(false)
    }

    const onError = () => {
        setError(true)
        setLodear(false)
    }

    const skeleton = !char && !loader && !error ? <Skeleton /> : null
    const errorView = error ? <Error /> : null
    const loaderView = loader ? <Loader /> : null
    const contentView = char && !loader && !error ? <ViewCharInfo char={char} /> : null
    const styleLoader = loader ? { textAlign: 'center', paddingTop: '25px' } : null

    return (
        <div className='char--info' style={styleLoader}>
            {skeleton}
            {errorView}
            {loaderView}
            {contentView}
        </div>
    )
}

const ViewCharInfo = ({ char }) => {
    if (!char) {
        return
    }
    const { name, description, thumbnail, homepage, wiki, comics } = char
    return (
        <>
            <div className='char--basics'>
                <img src={thumbnail} alt='abyss' />
                <div className='char--info-content'>
                    <h2>{name}</h2>
                    <div className='char-btns'>
                        <a
                            href={homepage}
                            className='button'
                            style={{ marginBottom: '10px' }}
                        >
                            <div className='inner'> HOMEPAGE</div>
                        </a>
                        <a href={wiki} className='button button-darck'>
                            <div className='inner'> WIKI</div>
                        </a>
                    </div>
                </div>
            </div>

            <p>{description}</p>
            <div className='char-comics'>
                <h3>Comics: </h3>
            </div>
            <ul className='char-comics-list'>
                {comics ? null : 'Comics is not defained'}
                {comics.map((item, i) => {
                    if (i > 9) return
                    return (
                        <li key={item} className='char-comics-item'>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CharInfo
