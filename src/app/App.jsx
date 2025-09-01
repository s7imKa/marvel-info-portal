import { useState } from 'react'

import AppHeader from '../components/layout/appHeader/AppHeader'
import RandomChar from '../components/randomChar/RandomChar'
import SectionCharPanel from '../components/sectionCharPanel/SectionCharPanel'
import SectionComicsPanel from '../components/sectionComicsPanel/SectionComicsPanel'

import './App.css'

const App = () => {
    const [pagesNav, setPagesNav] = useState('Comics')

    const changePage = (value) => {
        setPagesNav(value)
    }

    return (
        <div className='app'>
            <AppHeader changePage={changePage} stateButton={pagesNav} />
            <main>
                {pagesNav === 'Characters' && (
                    <>
                        <RandomChar />
                        <SectionCharPanel />
                    </>
                )}
                {pagesNav === 'Comics' && <SectionComicsPanel />}
            </main>
        </div>
    )
}

export default App
