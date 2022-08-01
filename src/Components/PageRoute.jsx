import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Home'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Blog from './Blog'
import Blog_single_page from './Blog_single_page'
import Privacy_policy from './privacy_policy'
import Contact from './Contact'
import Copywrite from './Copywrite'


const PageRoute = () => {
    return (
        <>
            <Router>
                <Topbar />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                    <Route path='/portfolio' element={<Portfolio />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/blog' element={<Blog />}></Route>
                    <Route path='/blog/:slug' element={<Blog_single_page />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
                <Privacy_policy />
                <Footer />
                <Copywrite />
            </Router>
        </>
    )
}

export default PageRoute