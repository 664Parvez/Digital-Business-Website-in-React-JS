import React, { useState, useEffect } from 'react'

import Even_page_header_section from './EvenNumberPageHeader'
import ServicesHeaderApi from '../api/Services/header.json'
import FirstSectionApi from '../api/Services/first_section.json'
import SecondSectionTitle from '../api/Services/second_section_title.json'
import SecondSectionDivApi from '../api/Services/second_section_div.json'

const Services = () => {

    const [ headerApi, setHeaderApi ] = useState ([])
    const [ firstSection, setFirstSection ] = useState ([])
    const [ secondTitle, setSecondTitle ] = useState ([])

    useEffect (() => {
        document.title = "Service | Digital Marketing Services for improve your business"
    }, [])

    useEffect ( () => {
        ServicesHeaderApi.map( ( items ) => {
            setHeaderApi (items)
        } )
    }, [])

    useEffect (() => {
        FirstSectionApi.map ( ( items ) => {
            setFirstSection (items)
        } )
    }, [])

    useEffect (() => {
        SecondSectionTitle.map ((items) => {
            setSecondTitle (items)
        })
    }, [])

    return (
        <>
            <Even_page_header_section 
                smallTitle={ headerApi.smallTitle }
                bigTitle={ headerApi.bigTitle }
                description={ headerApi.description }
            />

            <div className="service_page">

                <div className="first_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-sm-12">
                                <h2><b>{ firstSection.bigTitle }</b></h2>
                                <p>{ firstSection.description }</p>
                            </div>
                            <div className="col-lg-5 col-sm-12 text-center">
                                <img src={ firstSection.img } alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second_section text-center">
                    <div className="container">
                        <h2>{ secondTitle.bigTitle }</h2>
                    </div>
                </div>

                <div className="second_section_div text-center">
                    <div className="container">
                        <div className="row">
                            {
                                SecondSectionDivApi.map ( ( items ) => {
                                    return (
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="card_div">
                                                <img src={ items.img } alt="" />
                                                <h3>{ items.bigTitle }</h3>
                                                <p>{ items.description }</p>
                                            </div>
                                        </div>
                                    )
                                } )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services