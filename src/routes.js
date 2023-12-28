import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import History from './pages/history'
import Discography from './pages/discography'
import Erro from './pages/erro'
import Footer from './components/footer'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/historia' element={<History/>}/>
                <Route path='/discografia' element={<Discography/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}