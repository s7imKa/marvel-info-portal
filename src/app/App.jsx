import { AnimatePresence } from 'framer-motion'
import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Routes, useLocation } from 'react-router-dom'

import InfoCharCard from '../components/InfoCharCard/InfoCharCard'
import InfoComicsCard from '../components/InfoComicsCard/InfoComicsCard'
import { AppBanner } from '../components/layout/appBanner/AppBanner'
import AppHeader from '../components/layout/appHeader/AppHeader'
import Loader from '../components/loader/Loader'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

import './App.css'

const RandomChar = React.lazy(() => import('../components/randomChar/RandomChar'))
const SectionCharPanel = React.lazy(
    () => import('../components/sectionCharPanel/SectionCharPanel'),
)
const SectionComicsPanel = React.lazy(
    () => import('../components/sectionComicsPanel/SectionComicsPanel'),
)

const App = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
                <div className='app'>
                    <AppHeader />
                    <main>
                        <Routes location={location} key={location.pathname}>
                            <Route
                                path='/'
                                element={
                                    <>
                                        <Suspense fallback={<Loader />}>
                                            <Helmet>
                                                <meta
                                                    name='description'
                                                    content='Marvel information portal'
                                                />
                                                <title>Marvel portal</title>
                                            </Helmet>
                                            <RandomChar />
                                            <SectionCharPanel />
                                        </Suspense>
                                    </>
                                }
                            />
                            <Route
                                path='/char/:id'
                                element={
                                    <>
                                        <Suspense fallback={<Loader />}>
                                            <InfoCharCard />
                                        </Suspense>
                                    </>
                                }
                            />

                            <Route
                                path='/comics'
                                element={
                                    <Suspense fallback={<Loader />}>
                                        <Helmet>
                                            <meta
                                                name='description'
                                                content='Page with list of our comics'
                                            />
                                            <title>Comics</title>
                                        </Helmet>
                                        <SectionComicsPanel />
                                    </Suspense>
                                }
                            />
                            <Route
                                path='/comics/:id'
                                element={
                                    <>
                                        <AppBanner />
                                        <Suspense fallback={<Loader />}>
                                            <InfoComicsCard />
                                        </Suspense>
                                    </>
                                }
                            />
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </main>
                </div>
        </AnimatePresence>
    )
}

export default App
