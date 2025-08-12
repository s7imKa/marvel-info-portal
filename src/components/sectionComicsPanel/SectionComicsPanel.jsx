import './sectionComicsPanel.css'
import { AppBanner } from '../layout/appBanner/AppBanner'
import { ComicsList } from '../comicsList/ComicsList'

export const SectionComicsPanel = () => {
	return (
		<section className='section-comics-panel'>
			<AppBanner/>
			<ComicsList/>
		</section>
	)
}