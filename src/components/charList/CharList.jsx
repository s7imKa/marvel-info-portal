import MarvelService from '../../services/MarvelService'
import CharListItem from '../charListItem/CharListItem'
import Error from '../error/Error'
import Loader from '../loader/Loader'

import { useEffect, useState } from 'react'

import './charList.css'

export const CharList = ({ onSelectedChar, selectedChar }) => {
    const [charList, setCharList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const marvelService = new MarvelService()

        const getChars = () => {
            marvelService
                .getAllCharacters()
                .then((characters) => {
                    setCharList(characters)
                    setLoading(false)
                })
                .catch(() => {
                    setError(true)
                    setLoading(false)
                })
        }
        getChars()
    }, [])

    const loadingView = loading ? <Loader /> : null
    const errorView = error ? <Error /> : null
    const charInfoView = !(loading || error)
        ? charList.map((item) => (
              <CharListItem
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  thumbnail={item.thumbnail}
                  onSelectedChar={onSelectedChar}
                  selectedChar={selectedChar}
              />
          ))
        : null

    return (
        <div className='char-list'>
            {loadingView}

            <ul className='char-grid'>
                {errorView}
                {charInfoView}
            </ul>
            <button className='button'>load more</button>
        </div>
    )
}
