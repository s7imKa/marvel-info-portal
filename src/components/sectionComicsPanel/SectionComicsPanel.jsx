import { useState } from 'react'
import { ComicsList } from '../comicsList/ComicsList'
import InfoComicsCard from '../InfoComicsCard/InfoComicsCard'
import { AppBanner } from '../layout/appBanner/AppBanner'
import './sectionComicsPanel.css'

const SectionComicsPanel = () => {
    const [viewInfoComics, setViewInfoComics] = useState(false)
    const [idComicsInfo, setIdComicsInfo] = useState(null)
    const onInfoComics = id => {
        setViewInfoComics(true)
        setIdComicsInfo(id)
    }
    const onInfoAllComics = () => {
        setViewInfoComics(false)
    }

    return (
        <section className='section-comics-panel'>
            <AppBanner />

            {viewInfoComics ? (
                <InfoComicsCard
                    idComicsInfo={idComicsInfo}
                    onInfoAllComics={onInfoAllComics}
                />
            ) : (
                <ComicsList onInfoComics={onInfoComics} />
            )}
        </section>
    )
}

export default SectionComicsPanel
