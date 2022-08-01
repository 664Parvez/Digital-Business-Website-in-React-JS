import React, { useState, useEffect } from 'react'
import Odd_page_header_section from './OddNumberPageHeader'

import PortfolioHeaderApi from '../api/Portfolio/header.json'
import PortfolioSection from '../api/Portfolio/Portfolio_section.json'

const Portfolio = () => {

    const [ headerApi, setHeaderApi ] = useState ([])

    useEffect (() => {
        document.title = "Portfolio | Our all client work here"
    }, [])

    useEffect ( () => {
        PortfolioHeaderApi.map( ( items ) => {
            setHeaderApi (items)
        } )
    }, [] )

    
    return (
        <>
            <Odd_page_header_section 
                bigTitle = { headerApi.bigTitle }
                smallTitle = { headerApi.smallTitle }
                description = { headerApi.description }
            />

            <div className="portfolio_section">
                <div className="container">
                    <div className="row">
                        {
                            PortfolioSection.map( ( { img, bigTitle, description } ) => {
                                return (
                                    <div className="col-lg-6">
                                        <img src={img} alt="" />
                                        <h2 className='mt-4'><b>{bigTitle}</b></h2>
                                        <p className='mb-5'>{ description }</p>
                                    </div>
                                )
                            } )
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio