import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Error from '../error/Error'
import Loader from '../loader/Loader'
import Skeleton from '../skeleton/Skeleton'
import FormCharInfo from '../formCharInfo/FormCharInfo'


import useMarvelService from '../../services/MarvelService'

import './charInfo.css'

const CharInfo = ({ charId }) => {
    const _allComics = 20
    const [char, setChar] = useState(null)
    const [comicsTitle, setComicsTitle] = useState([])

    const { loading, error, getCharacters, getAllComics } = useMarvelService()

    useEffect(() => {
        const updateChar = () => {
            if (!charId) {
                return
            }

            getCharacters(charId).then(res => onCharLoaded(res))

            getAllComics(0, _allComics).then(res => arrComicsTitle(res))
        }

        updateChar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charId])

    const arrComicsTitle = comics => {
        const arrTitle = comics.map(comic => ({
            id: comic.id,
            title: comic.title,
        }))
        setComicsTitle(arrTitle)
    }

    const onCharLoaded = char => {
        setChar(char)
    }

    const skeleton = !char && !loading && !error ? <Skeleton /> : null
    const errorView = error ? <Error /> : null
    const loaderView = loading ? <Loader /> : null
    const contentView =
        char && !loading && !error ? (
            <ViewCharInfo char={char} arrTitle={comicsTitle} />
        ) : null
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

const ViewCharInfo = ({ char, arrTitle }) => {
    if (!char) {
        return
    }
    const { name, description, thumbnail, homepage, wiki, comics } = char

    return (
        <div>
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
                {comics && arrTitle
                    ? comics.slice(0, 10).map((item, i) => {
                          // Знайти id коміксу по назві
                          const found = arrTitle.find(comic => comic.title === item)
                          return (
                              <li key={found ? found.id : i} className='char-comics-item'>
                                  {found ? (
                                      <Link to={`/comics/${found.id}`}>{item}</Link>
                                  ) : (
                                      item
                                  )}
                              </li>
                          )
                      })
                    : null}
            </ul>
            
            <FormCharInfo/>

        </div>
    )
}

export default CharInfo
