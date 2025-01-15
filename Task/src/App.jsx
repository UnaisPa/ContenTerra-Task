import {Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = lazy(()=>import('./pages/Home'))
import './App.css'

function App() {

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>} />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
