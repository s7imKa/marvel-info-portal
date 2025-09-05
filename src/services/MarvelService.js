import { useHttp } from '../hooks/http.hook'

const useMarvelService = () => {
    const { loading, request, error, clearError, setError } = useHttp()
    const _apiBase = 'https://marvel-server-zeta.vercel.app/'
    const _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df'
    const _baseOffset = 0

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(
            `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`,
        )
        return res.data.results.map(CharacterData => _transformCharacters(CharacterData))
    }

    const getCharacters = async id => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
        if (!res.data || !res.data.results || res.data.results.length === 0) {
            throw new Error('Character not found')
        }
        return _transformCharacters(res.data.results[0])
    }

    const getAllComics = async (offset = _baseOffset, limit = 8) => {
        const res = await request(
            `${_apiBase}comics?limit=${limit}&offset=${offset}&${_apiKey}`,
        )
        return res.data.results.map(ComicsData => _transformComics(ComicsData))
    }

    const getComics = async id => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)
        return _transformComics(res.data.results[0])
    }

    const _transformCharacters = char => {
        const description =
            char.description && char.description.length >= 100
                ? char.description.slice(0, 200) + '...'
                : char.description || 'not description'

        return {
            id: char.id,
            name: char.name,
            description: description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }

    const _transformComics = comics => {
        const description =
            comics.description && comics.description.length >= 100
                ? comics.description.slice(0, 200) + '...'
                : comics.description || 'not description'
        return {
            id: comics.id,
            title: comics.title,
            description: description,
            pageCount: comics.pageCount,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            textObjects: comics.textObjects.languages,
            price: comics.prices[0].price,
        }
    }

    return {
        getAllCharacters,
        getCharacters,
        getAllComics,
        getComics,
        loading,
        error,
        clearError,
        setError,
    }
}

export default useMarvelService

// https://gateway.marvel.com/docs/public
