import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Styles/Menu.css'

export default function Menu() {
    return (
        <nav className='MenuList'>
            <ul>
                <li>
                    <Link to="/">Biography</Link>
                </li>
                <li>
                    <Link to="famous">Most famous work</Link>
                </li>
                <li>
                    <Link to="collection">Collection</Link>
                </li>
                <li>
                    <Link to="add">Add new painting</Link>
                </li>
            </ul>
        </nav>
    )
}