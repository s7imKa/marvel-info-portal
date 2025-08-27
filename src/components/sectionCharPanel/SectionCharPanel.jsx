import { useState } from 'react'

import CharInfo from '../charInfo/CharInfo'
import { CharList } from '../charList/CharList'
import ErrorBoundery from '../errorBoundery/ErrorBoundery'

import bgChar from '../../assets/images/background/asset.png'

import './sectionCharPanel.css'

const SectionCharPanel = () => {
    const [selectedChar, setSelectedChar] = useState(null)

    const onSelectedChar = id => {
        setSelectedChar(id)
    }

    return (
        <section className='section-char-panel'>
            <ErrorBoundery>
                <CharList onSelectedChar={onSelectedChar} selectedChar={selectedChar} />
            </ErrorBoundery>

            <ErrorBoundery>
                <CharInfo charId={selectedChar} />
            </ErrorBoundery>

            <img className='bg-img' src={bgChar} alt='bgChar' />
        </section>
    )
}

export default SectionCharPanel
