import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppHeader from '../components/layout/appHeader/AppHeader'
import RandomChar from '../components/randomChar/RandomChar'
import SectionCharPanel from '../components/sectionCharPanel/SectionCharPanel'
import SectionComicsPanel from '../components/sectionComicsPanel/SectionComicsPanel'

import './App.css'

const App = () => {


    return (
        <BrowserRouter>
            <div className='app'>
                <AppHeader />
                <main>
                    <Routes>
                        <Route
                            path='/comics'
                            element={
                                <>
                                    <SectionComicsPanel />
                                </>
                            }
                        />
                        <Route
                            path='/'
                            element={
                                <>
                                    <RandomChar />
                                    <SectionCharPanel />
                                </>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
