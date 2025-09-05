import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import InfoComicsCard from '../components/InfoComicsCard/InfoComicsCard'
import AppHeader from '../components/layout/appHeader/AppHeader'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import RandomChar from '../components/randomChar/RandomChar'
import SectionCharPanel from '../components/sectionCharPanel/SectionCharPanel'
import SectionComicsPanel from '../components/sectionComicsPanel/SectionComicsPanel'
import { AppBanner } from '../components/layout/appBanner/AppBanner'

import './App.css'

const App = () => {
    return (
        <Router>
            <div className='app'>
                <AppHeader />
                <main>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <RandomChar />
                                    <SectionCharPanel />
                                </>
                            }
                        />

                        <Route path='/comics' element={<SectionComicsPanel />} />
                        <Route
                            path='/comics/:id'
                            element={
                                <>
                                    <AppBanner />
                                    <InfoComicsCard />
                                </>
                            }
                        />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
