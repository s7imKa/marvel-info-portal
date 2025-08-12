class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`cloud not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(" https://gateway.marvel.com/docs/public");
  };

  getCharacters = (id) => {
    return this.getResource(
      ` https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=eb9d5baa173858a51226c74b6f887a7b&hash=0479e542fd2b549ba15c2abfc4f414e4 `,
    );
  };
}

export default MarvelService;

// https://gateway.marvel.com/docs/public
