class MarvelService {
	_apiBase = 'https://marvel-server-zeta.vercel.app/'
	_apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df'

	getResource = async url => {
		let res = await fetch(url)

		if (!res.ok) {
			throw new Error(`cloud not fetch ${url}, status: ${res.status}`)
		}

		return await res.json()
	}

	getAllCharacters = () => {
		return this.getResource(`${this._apiBase}characters?${this._apiKey}`)
	}

	getCharacters = id => {
		return this.getResource(
			`https://marvel-server-zeta.vercel.app/characters/${id}?apikey=d4eecb0c66dedbfae4eab45d312fc1df`
		)
	}
}

export default MarvelService

// https://gateway.marvel.com/docs/public
