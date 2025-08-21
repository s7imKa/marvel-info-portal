import { useEffect, useState } from 'react';

import MarvelService from '../../services/MarvelService';

import CharListItem from '../charListItem/CharListItem';
import Error from '../error/Error';
import Loader from '../loader/Loader';

import './charList.css';


export const CharList = ({ onSelectedChar, selectedChar }) => {
    const [charList, setCharList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(1) // ✅ ДОДАТИ: трекінг offset
    const [charEnd, setCharEnd] = useState(false)

    const marvelService = new MarvelService()

    const onRequest = (offset = 1, isNewItems = false) => {
        // ✅ ВИПРАВИТИ: назва функції і параметри
        if (isNewItems) {
            setNewItemLoading(true) // тільки для нових елементів
        } else {
            setLoading(true) // для першого завантаження
            setError(false)
        }

        marvelService
            .getAllCharacters(offset)
            .then((characters) => {
                if (characters.length < 9) {
                    setCharEnd(true)
                }

                if (isNewItems) {
                    setCharList((prev) => [...prev, ...characters]) // ✅ ВИПРАВИТИ: розпакувати масив
                } else {
                    setCharList(characters) // перше завантаження
                }
                setLoading(false)
                setNewItemLoading(false)
                setOffset(offset + 9) // ✅ ДОДАТИ: оновити offset (якщо API повертає 9 елементів)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
                setNewItemLoading(false)
            })
    }

    useEffect(() => {
        onRequest(1, false) // ✅ ВИПРАВИТИ: перше завантаження
    }, [])

    const handleLoadMore = () => {
        // ✅ ДОДАТИ: функція для кнопки
        onRequest(offset, true)
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
            {loading && <Loader />} {/* ✅ тільки при першому завантаженні */}
            {!loading && (
                <ul className='char-grid'>
                    {charList.map((item) => (
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
            )}
            {!loading && (
                <button
                    className='button'
                    onClick={handleLoadMore}
                    disabled={newItemLoading} // ✅ ДОДАТИ: блокувати кнопку під час завантаження
                    style={{
                        display: charEnd ? 'none' : 'block',
                        opacity: newItemLoading ? 0.6 : 1, // ✅ візуальна індикація
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

