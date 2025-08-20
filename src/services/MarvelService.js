class MarvelService {
    _apiBase = 'https://marvel-server-zeta.vercel.app/'
    _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df'
    _baseOffset = 1

    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`cloud not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(
            `${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`,
        )
        return res.data.results.map((CharacterData) =>
            this._transformCharacters(CharacterData),
        )
    }

    getCharacters = async (id) => {
        const res = await this.getResource(
            `${this._apiBase}characters/${id}?${this._apiKey}`,
        )
        return this._transformCharacters(res.data.results[0])
    }

    _transformCharacters = (char) => {
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
}

export default MarvelService

// https://gateway.marvel.com/docs/public
