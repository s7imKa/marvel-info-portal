import comics from '../../assets/images/comics/x-men.png'

import './InfoComicsCard.css'

export default function InfoComicsCard({ onInfoAllComics }) {
    return (
        <section className='info-comics-section'>
            <img
                src={comics}
                alt='X-Men: Days of Future Past'
                className='info-comics-img'
            />
            <div className='info-comics-content'>
                <a
                    href='#'
                    className='info-comics-back'
                    onClick={e => {
                        e.preventDefault()
                        onInfoAllComics()
                    }}
                >
                    Back to all
                </a>
                <h2 className='info-comics-title'>X-Men: Days of Future Past</h2>
                <p className='info-comics-desc'>
                    Re-live the legendary first journey into the dystopian future of 2013
                    - where Sentinels stalk the Earth, and the X-Men are humanity's only
                    hope...until they die! Also featuring the first appearance of Alpha
                    Flight, the return of the Wendigo, the history of the X-Men from
                    Cyclops himself...and a demon for Christmas!?
                </p>
                <div className='info-comics-pages'>144 pages</div>
                <div className='info-comics-lang'>Language: en-us</div>
                <div className='info-comics-price'>9.99$</div>
            </div>
        </section>
    )
}
