import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPhoneAlt, FaWhatsapp, FaRegEnvelope, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaBehanceSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h6><b>About</b></h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, autem earum voluptatum odio perspiciatis facilis amet consectetur adipisicing elit. Nam, autem earum</p>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <h6><b>Services</b></h6>
                            <ul className='services'>
                                <li>
                                    <a>
                                        <NavLink to='/search-engine-optimization'>Search Engine Optimization</NavLink>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <NavLink to='/social-media-marketing'>Social Media Marketing</NavLink>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <NavLink to='/targeting-email-marketing'>Targeting Email Marketing</NavLink>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <NavLink to='/domain-registration'>Domain Registration</NavLink>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h6><b>Development</b></h6>
                            <ul className='development'>
                                <li>
                                    <a>
                                        <NavLink to='/software-development'>Software Development</NavLink>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <NavLink to='/custom-web-design'>Custom Web Design</NavLink>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <NavLink to='/web-development'>Web Development</NavLink>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <NavLink to='/app-development'>App Development</NavLink>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h6 className='mb-3'><b>Contact Us</b></h6>
                            <p className='mb-2'><FaPhoneAlt /> | +345 9006 4453</p>
                            <p className='mb-2'><FaWhatsapp /> | +435 9007 4454</p>
                            <p className='mb-2'><FaRegEnvelope /> | example@gmail.com</p>
                            <h6 className='mt-4'><b>Social Media</b></h6>
                            <ul className='social_footer_icon'>
                                <li>
                                <a href=""><FaFacebookSquare /></a>
                                </li>
                                <li>
                                <a href=""><FaInstagramSquare /></a>
                                </li>
                                <li>
                                <a href=""><FaLinkedin /></a>
                                </li>
                                <li>
                                <a href=""><FaTwitterSquare /></a>
                                </li>
                                <li>
                                <a href=""><FaBehanceSquare /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer