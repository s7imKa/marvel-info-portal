import { useEffect, useState } from 'react'

import Error from '../error/Error'
import Loader from '../loader/Loader'
import Skeleton from '../skeleton/Skeleton'

import useMarvelService from '../../services/MarvelService'

import './charInfo.css'

const CharInfo = ({ charId }) => {
    const [char, setChar] = useState(null)

    const { loading, error, getCharacters } = useMarvelService()

    useEffect(() => {
        const updateChar = () => {
            if (!charId) {
                return
            }

            getCharacters(charId)
                .then(res => onCharLoaded(res))
        }

        updateChar()
    }, [charId])

    const onCharLoaded = char => {
        setChar(char)
    }

 
    const skeleton = !char && !loading && !error ? <Skeleton /> : null
    const errorView = error ? <Error /> : null
    const loaderView = loading ? <Loader /> : null
    const contentView = char && !loading && !error ? <ViewCharInfo char={char} /> : null
    const styleLoader = loading ? { textAlign: 'center', paddingTop: '25px' } : null

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
