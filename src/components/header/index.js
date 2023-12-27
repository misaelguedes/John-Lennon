import './header.css'
import { Link } from 'react-router-dom'

import JohnLennon from '../../assets/john-lennon.jpg'

export default function Header() {
    return (
        <header>
            <img className='capa' src={JohnLennon} alt='John Lennon'/>
            <div className='menu'>
                <div className='itens'>
                    <Link to='/'>Home</Link>
                    <Link to='/historia'>História</Link>
                    <Link to='/discografia'>Discografia</Link>
                </div>
            </div>
        </header>
    )
}