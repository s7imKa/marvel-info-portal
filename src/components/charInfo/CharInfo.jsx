import { Component } from 'react'
import MarvelService from '../../services/MarvelService'
import Error from '../error/Error'
import Loader from '../loader/Loader'
import Skeleton from '../skeleton/Skeleton'

import './charInfo.css'

class CharInfo extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        char: null, // дані персонажа
        loader: false, // стан завантаження
        error: false,
    }

    marvelService = new MarvelService() // сервіс Marvel API

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar = () => {
        const { charId } = this.props
        if (!charId) {
            return
        }

        // Скидаємо error стан при новому запиті
        this.setState({
            loader: true,
            error: false,
        })

        this.marvelService
            .getCharacters(charId)
            .then((res) => this.onCharLoaded(res))
            .catch(() => this.onError())
    }

    onCharLoaded = (char) => {
        this.setState({
            char: char, // зберігаємо персонажа
            loader: false, // вимикаємо loader
            error: false, // ВАЖЛИВО: скидаємо помилку при успішному завантаженні
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loader: false,
        })
    }

    render() {
        const { char, loader, error } = this.state

        const skeleton = !char && !loader && !error ? <Skeleton /> : null
        const errorView = error ? <Error /> : null
        const loaderView = loader ? <Loader /> : null
        const contentView =
            char && !loader && !error ? <ViewCharInfo char={char} /> : null

        const styleLoader = loader ? { textAlign: 'center', paddingTop: '25px' } : null
        return (
            <div className='char--info' style={styleLoader}>
                {skeleton}
                {errorView}
                {loaderView}
                {contentView}
            </div>
        )
    }
}

const ViewCharInfo = ({ char }) => {
    if (!char) {
        return
    }
    const { name, description, thumbnail, homepage, wiki, comics } = char
    return (
        <>
            <div className='char--basics'>
                <img src={thumbnail} alt='abyss' />
                <div className='char--info-content'>
                    <h2>{name}</h2>
                    <div className='char-btns'>
                        <a
                            href={homepage}
                            className='button'
                            style={{ marginBottom: '10px' }}
                        >
                            <div className='inner'> HOMEPAGE</div>
                        </a>
                        <a href={wiki} className='button button-darck'>
                            <div className='inner'> WIKI</div>
                        </a>
                    </div>
                </div>
            </div>

            <p>{description}</p>
            <div className='char-comics'>
                <h3>Comics: </h3>
            </div>
            <ul className='char-comics-list'>
                {comics ? null : 'Comics is not defained'}
                {comics.map((item, i) => {
                    if (i > 9) return
                    return (
                        <li key={item} className='char-comics-item'>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CharInfo
