import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
  return (
    <nav className={styles.body}>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blanco'>Contact</Link></li>
            <li><Link to='/form'>Form</Link></li>
            <li><Link to='/social-links'>Social</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/counter'>Counter</Link></li>
            <li><Link to='/table'>Table</Link></li>
            <li><Link to='/calc'>Calculator</Link></li>
            
        </ul>
    </nav>
  )
}

export default Header