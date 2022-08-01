import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

import Bar from '../api/Navbar/Navbar.json'

const Navbar = () => {

    const [ navItem, setNavItem ] = useState (false)
    const [ bar, setBar ] = useState ([])
    const [ logo, setLogo ] = useState ()

    useEffect (() => {
        Bar.map ( ( items ) => {
            setBar (items)
            setLogo (items.logo)
        } )
    }, [])

    const getNavItem = () => {
        setNavItem ( !navItem )
    }

    return (
        <>
            <nav>
                <div className="container">
                    <NavLink to='/'>
                        <img className='logo' src={ logo } alt="logo" />
                    </NavLink>
                    <ul className={ navItem ? "show" : "unshow" }>
                        <li>
                            <a>
                                <NavLink to='/'><FaHome /> Home</NavLink>
                            </a>
                        </li>
                        <li>
                            <a>
                                <NavLink to='/services'>Services</NavLink>
                            </a>
                        </li>
                        <li>
                            <a>
                                <NavLink to='/portfolio'>Portfolio</NavLink>
                            </a>
                        </li>
                        <li>
                            <a>
                                <NavLink to='/about'>About</NavLink>
                            </a>
                        </li>
                        <li>
                            <a>
                                <NavLink to='/blog'>Blog</NavLink>
                            </a>
                        </li>
                        <li>
                            <a>
                                <NavLink to='/contact'>Contact</NavLink>
                            </a>
                        </li>
                    </ul>
                    <img onClick={ getNavItem } className='barIcon' src={ bar.img } alt="" />
                </div>
            </nav>
        </>
    )
}

export default Navbar