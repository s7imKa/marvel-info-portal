import { ComicsList } from '../comicsList/ComicsList'
import { AppBanner } from '../layout/appBanner/AppBanner'
import './sectionComicsPanel.css'

const SectionComicsPanel = () => {
    return (
        <section className='section-comics-panel'>
            <AppBanner />

            <ComicsList />
        </section>
    )
}

export default SectionComicsPanel
