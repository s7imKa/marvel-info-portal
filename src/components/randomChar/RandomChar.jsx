import { Component } from 'react'

import mjolnir from '../../assets/images/img-char-random-section/mjolnir.png'
import shield from '../../assets/images/img-char-random-section/shield.png'

import MarvelService from '../../services/MarvelService'
import Loader from '../loader/Loader'
import Error from '../error/Error'

import '../../assets/styles/button.css'
import './randomChar.css'

class RandomChar extends Component {
	constructor(props) {
		super(props)
		this.updataChar() // одразу завантажує випадкового персонажа
	}

	state = {
		char: {}, // дані персонажа
		loader: true, // стан завантаження
		error: false,
	}

	marvelService = new MarvelService() // сервіс Marvel API

	onCharLoaded = char => {
		this.setState({
			char: char, // зберігаємо персонажа
			loader: false, // вимикаємо loader
		})
	}

	onError = () => {
		this.setState({
			error: true,
			loader: false,
		})
	}

	updataChar = () => {
		const max = 25
		const id = Math.floor(Math.random() * max) + 1 // випадковий id
		this.marvelService
			.getCharacters(id)
			.then(res => this.onCharLoaded(res))
			.catch(this.onError)
	}

	render() {
		const { char, loader, error } = this.state
		const errorView = error ? <Error /> : null
		const loaderView = loader ? <Loader /> : null
		const contentView = !(loader || error) ? <Char char={char} /> : null

		return (
			<section className='random-char-section'>
				<div className='char-info'>
					{errorView}
					{loaderView}
					{contentView}
				</div>
				<div className='char-random'>
					<img className='mjolnir' src={mjolnir} alt='mjolnir' /> {/* картинка */}
					<img className='shield' src={shield} alt='shield' /> {/* картинка */}
					<div className='char-random-content'>
						<h1>
							Random character for today! <br />
							Do you want to get to know him better?
						</h1>
						<div className='button-random-car'>
							<h1>Or choose another one</h1>
							<button className='button'>TRY IT</button> {/* кнопка */}
						</div>
					</div>
				</div>
			</section>
		)
	}
}

const Char = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki } = char // деструктуризація

	return (
		<>
			<img src={thumbnail} alt='img-char' /> {/* фото */}
			<div className='char-info-content'>
				<h2>{name}</h2> {/* ім'я */}
				<p>{description}</p> {/* опис */}
				<div className='button-char-info'>
					<a href={homepage} className='button'>
						<div className='inner'>HOMEPAGE</div>
					</a>
					<a href={wiki} className='button button-darck'>
						<div className='inner'> WIKI</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default RandomChar
