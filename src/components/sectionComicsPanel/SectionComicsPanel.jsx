// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { ComicsList } from '../comicsList/ComicsList'
import { AppBanner } from '../layout/appBanner/AppBanner'
import './sectionComicsPanel.css'

const SectionComicsPanel = () => {
    return (
        <>
            <AppBanner />
            <motion.section
                className='section-comics-panel'
                initial={{ opacity: 0, y: 20, scale: 0.98 }} // трохи нижче та менше
                animate={{ opacity: 1, y: 0, scale: 1 }} // нормальний стан
                exit={{ opacity: 0, y: 10, scale: 0.98 }} // легкий підйом при виході
                transition={{ duration: 0.5, ease: 'easeOut' }} // плавно, без різких ривків
            >
                <ComicsList />
            </motion.section>
        </>
    )
}

export default SectionComicsPanel
