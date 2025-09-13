// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
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
        <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.98 }} // трохи нижче та менше
            animate={{ opacity: 1, y: 0, scale: 1 }} // нормальний стан
            exit={{ opacity: 0, y: 10, scale: 0.98 }} // легкий підйом при виході
            transition={{ duration: 0.5, ease: 'easeOut' }} // плавно, без різких ривків
            className='section-char-panel'
        >
            <ErrorBoundery>
                <CharList onSelectedChar={onSelectedChar} selectedChar={selectedChar} />
            </ErrorBoundery>

            <ErrorBoundery>
                <CharInfo charId={selectedChar} />
            </ErrorBoundery>

            <img className='bg-img' src={bgChar} alt='bgChar' />
        </motion.section>
    )
}

export default SectionCharPanel
