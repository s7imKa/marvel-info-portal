import { useEffect, useState } from 'react'
import '../../assets/styles/button.css'
import useMarvelService from '../../services/MarvelService'
import ComicsListItem from '../comicsListItem/ComicsListItem'
import Error from '../error/Error'
import Loader from '../loader/Loader'
import './comicsList.css'

export const ComicsList = ({ onInfoComics }) => {
    const [comics, setComics] = useState([])
    const [offset, setOffset] = useState(0) // ✅ ДОДАТИ: трекінг offset
    const [charEnd, setCharEnd] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)

    const { loading, error, getAllComics } = useMarvelService()

    const onUpdateComics = (offset, isNewItems = false) => {
        isNewItems ? setNewItemLoading(false) : setNewItemLoading(true) // тільки для нових елементів

        getAllComics(offset)
            .then(res => setComicsLoaded(res, isNewItems))
            .catch(() => {
                setNewItemLoading(false)
            })
    }

    useEffect(() => {
        onUpdateComics(0, true)
    }, [])

    const setComicsLoaded = (comics, isNewItems) => {
        comics.length < 8 ? setCharEnd(true) : setCharEnd(false)

        isNewItems
            ? setComics(comics)
            : setComics(prevComics => [...prevComics, ...comics])
        setNewItemLoading(false)
        setOffset(offset + 8)
    }

    const clickButtonLoaded = () => {
        onUpdateComics(offset, false)
    }

    const loadingView = loading ? <Loader /> : null
    const errorView = error ? <Error /> : null

    return (
        <div className='comics-list'>
            {loadingView}
            {errorView}
            <ul className='comics-grid'>
                {comics.map(item => (
                    <ComicsListItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        thumbnail={item.thumbnail}
                        price={item.price}
                        onClick={onInfoComics}
                    />
                ))}
            </ul>

            {loading ? null : (
                <button
                    className='button'
                    onClick={clickButtonLoaded}
                    disabled={newItemLoading}
                    style={{
                        display: charEnd ? 'none' : 'block',
                        opacity: newItemLoading ? 0.6 : 1,
                        cursor: newItemLoading ? 'not-allowed' : 'pointer',
                    }}
                >
                    LOAD MORE
                </button>
            )}
        </div>
    )
}
