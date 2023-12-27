import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import History from './pages/history'
import Footer from './components/footer'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/historia' element={<History/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}