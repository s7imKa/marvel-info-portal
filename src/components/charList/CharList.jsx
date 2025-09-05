import { useEffect, useState } from 'react'

import useMarvelService from '../../services/MarvelService'

import CharListItem from '../charListItem/CharListItem'
import Error from '../error/Error'
import Loader from '../loader/Loader'

import './charList.css'

export const CharList = ({ onSelectedChar, selectedChar }) => {
    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(0) // ✅ ДОДАТИ: трекінг offset
    const [charEnd, setCharEnd] = useState(false)

    const { loading, error, getAllCharacters } = useMarvelService()

    const onRequest = (offset = 0, isNewItems = false) => {
        isNewItems ? setNewItemLoading(false) : setNewItemLoading(true) // тільки для нових елементів

        getAllCharacters(offset)
            .then(characters => setCharLoaded(characters, isNewItems))
            .catch(() => {
                setNewItemLoading(false)
            })
    }

    useEffect(() => {
        onRequest(1, true) // ✅ ВИПРАВИТИ: перше завантаження
    }, [])

    const handleLoadMore = () => {
        onRequest(offset, false)
    }

    const setCharLoaded = (chars, isNewItems) => {
        if (chars.length < 9) {
            setCharEnd(true)
        }

        isNewItems ? setCharList(chars) : setCharList(prev => [...prev, ...chars])
        setNewItemLoading(false)
        setOffset(offset + 9)
    }

    // ✅ ВИПРАВИТИ: умовний рендер
    if (error) {
        return (
            <div className='char-list'>
                <Error />
            </div>
        )
    }

    return (
        <div className='char-list'>
            {loading && !newItemLoading && <Loader />}
            <ul className='char-grid'>
                {charList.map(item => (
                    <CharListItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        thumbnail={item.thumbnail}
                        onSelectedChar={onSelectedChar}
                        selectedChar={selectedChar}
                    />
                ))}
            </ul>
            {!loading && (
                <button
                    className='button'
                    onClick={handleLoadMore}
                    disabled={newItemLoading} // ✅ ДОДАТИ: блокувати кнопку під час завантаження
                    style={{
                        display: charEnd ? 'none' : 'block',
                        opacity: newItemLoading ? 0.6 : 1,
                        cursor: newItemLoading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {newItemLoading ? 'Loading...' : 'Load More'}{' '}
                    {/* ✅ динамічний текст */}
                </button>
            )}
        </div>
    )
}
