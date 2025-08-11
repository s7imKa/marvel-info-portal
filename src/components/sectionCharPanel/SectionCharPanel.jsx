import { CharList } from '../charList/CharList'
import { CharInfo } from '../charInfo/charInfo'

import bgChar from '../../assets/images/background/asset.png'

import './sectionCharPanel.css'

export default function SectionCharPanel() {
	return (
		<section className='section-char-panel'>
			<CharList />
			<CharInfo/>
			<img className='bg-img' src={bgChar} alt="bgChar" />
		</section>
	)
}
