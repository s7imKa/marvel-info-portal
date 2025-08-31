import { useHttp } from '../hooks/http.hook'

const useMarvelService = () => {
    const { loading, request, error, clearError, setError } = useHttp()
    const _apiBase = 'https://marvel-server-zeta.vercel.app/'
    const _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df'
    const _baseOffset = 1

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

    return {
        getAllCharacters,
        getCharacters,
        loading,
        error,
        clearError,
        setError,
    }
}

export default useMarvelService

// https://gateway.marvel.com/docs/public
