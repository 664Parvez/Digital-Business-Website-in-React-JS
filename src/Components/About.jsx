import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Even_page_header_section from './EvenNumberPageHeader'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaBehance } from 'react-icons/fa'

import AboutHeaderApi from '../api/About/header.json'
import FirstSectionApi from '../api/About/first_section.json'
import SecondSectionTitle from '../api/About/second_section_title.json'
import CardSection from '../api/About/about_card_section.json'
import ThirdSection from '../api/About/third_section.json'
import ForthSectionTitle from '../api/About/about_forth_section_title.json'
import ForthMainSectionApi from '../api/About/forth_main_section.json'

const About = () => {

    const [ headerApi, setHeaderApi ] = useState ([])
    const [ firstSection, setFirstSection ] = useState([])
    const [ secondSectionTitle, setSecondSectionTitle ] = useState ([])
    const [ thirdSection, setThirdSection ] = useState([])
    const [ forthSectionTitle, setForthSectionTitle ] = useState([])
    const [ ForthMainSection, setForthMainSection ] = useState ([])
    const [ forthSectionService, setForthSectionService ] = useState ()

    useEffect (() => {
        document.title = "About | Do you want to know about us and how we can provide our services"
    }, [])

    useEffect ( () => {
        AboutHeaderApi.map( ( items ) => {
            setHeaderApi (items)
        } )
    }, [] )

    useEffect (() => {
        FirstSectionApi.map((items) => {
            setFirstSection (items)
        })
    }, [])

    useEffect (() => {
        SecondSectionTitle.map ((items) => {
            setSecondSectionTitle (items)
        })
    }, [])

    useEffect (() => {
        ThirdSection.map((items) => {
            setThirdSection (items)
        })
    }, [])

    useEffect (() => {
        ForthSectionTitle.map( ( items ) => {
            setForthSectionTitle (items)
        } )
    }, [])

    useEffect (() => {
        ForthMainSectionApi.map ( ( items ) => {
            setForthMainSection (items)
        } )
    }, [])

    return (
        <>
            <Even_page_header_section 
                smallTitle={ headerApi.smallTitle }
                bigTitle={ headerApi.bigTitle }
                description={ headerApi.description }
            />

            <div className="about_first_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={ firstSection.img } alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h2><b>{ firstSection.bigTitle }</b></h2>
                            <p>{ firstSection.description }</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about_second_section">
                <div className="container">
                    <h2 className='text-center'><b>{ secondSectionTitle.bigTitle }</b></h2>
                    <div className="row">
                        {
                            CardSection.map ( ( { img, name, position, description } ) => {
                                return (
                                    <div className="col-lg-3 col-sm-12 text-center">
                                        <div className="card">
                                            <div className="card-img">
                                                <img src={ img } alt="img" />
                                            </div>
                                            <div className="card-body">
                                                <h5><b>{ name }</b></h5>
                                                <p>{ position }</p>
                                                <p>{ description }</p>
                                            </div>
                                            <div className="card-footer">
                                                <ul>
                                                    <li><a href=""><FaFacebookF /></a></li>
                                                    <li><a href=""><FaInstagram /></a></li>
                                                    <li><a href=""><FaLinkedinIn /></a></li>
                                                    <li><a href=""><FaTwitter /></a></li>
                                                    <li><a href=""><FaBehance /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )
                            
                        }
                    </div>
                </div>
            </div>

            <div className="about_third_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2><b>{ thirdSection.bigTitle }</b></h2>
                            <p className='mt-4'>{ thirdSection.description }</p>
                            
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={thirdSection.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about_forth_section">
                <div className="forth_title_section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2>{ forthSectionTitle.bigTitle }</h2>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <NavLink to='/' className='btn'>{ forthSectionTitle.btn }</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forth_main_section text-center">
                <div className="container">
                    <div className="row">
                            <div className="col-lg-7">
                                <img src={ ForthMainSection.img } alt="" />
                            </div>
                            <div className="col-lg-5">
                                <ul>
                                    <li>{ ForthMainSection.services_one }</li>
                                    <li>{ ForthMainSection.services_two }</li>
                                    <li>{ ForthMainSection.services_three }</li>
                                    <li>{ ForthMainSection.services_four }</li>
                                    <li>{ ForthMainSection.services_five }</li>
                                    <li>{ ForthMainSection.services_six }</li>
                                    <li>{ ForthMainSection.services_seven }</li>
                                    <li>{ ForthMainSection.services_eight }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About