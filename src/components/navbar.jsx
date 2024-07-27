import '../styles/navbar.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const [underline1, setUnderline1] = useState(false)
    const [underline2, setUnderline2] = useState(false)
    const [underline3, setUnderline3] = useState(false)
    
    return (
        <nav>
            <ul className='nav-container'>
                <li
                    onMouseEnter={() => setUnderline1(true)}
                    onMouseLeave={() => setUnderline1(false)}
                >
                    <Link to='/'>Home</Link>
                    <motion.div 
                        className='underline'
                        animate={{
                            width: underline1 ? '100%' : '0%'
                        }}
                    ></motion.div>
                </li>
                <li
                    onMouseEnter={() => setUnderline2(true)}
                    onMouseLeave={() => setUnderline2(false)}
                >
                    <Link to='/projects'>Projects</Link>
                    <motion.div 
                        className='underline'
                        animate={{
                            width: underline2 ? '100%' : '0%'
                        }}
                    ></motion.div>
                </li>
                <li
                    onMouseEnter={() => setUnderline3(true)}
                    onMouseLeave={() => setUnderline3(false)}
                >
                    <Link onClick={() => {
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: 'smooth'
                        })
                    }}>Contact</Link>
                    <motion.div 
                        className='underline'
                        animate={{
                            width: underline3 ? '100%' : '0%'
                        }}
                    ></motion.div>
                </li>
            </ul>
        </nav>
    )
}