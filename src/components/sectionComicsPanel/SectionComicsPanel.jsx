import './sectionComicsPanel.css'
import { AppBanner } from '../layout/appBanner/AppBanner'
import { ComicsList } from '../comicsList/ComicsList'

const SectionComicsPanel = () => {
	return (
		<section className='section-comics-panel'>
			<AppBanner/>
			<ComicsList/>
		</section>
	)
}

export default SectionComicsPanel