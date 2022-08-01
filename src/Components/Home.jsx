import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TbBrandAppleArcade } from 'react-icons/tb'

import FirstSectionApi from '../api/Home/first_section.json'
import SecondSectionApi from '../api/Home/second_section_title.json'
import SecondSectionBottom from '../api/Home/second_section_bottom_section.json'
import ThirdSectionApi from '../api/Home/third_section.json'
import ForthSectionTitle from '../api/Home/forth_section_title.json'
import ForthSectionCard from '../api/Home/forthSectionCard.json'
import FifthSectionApi from '../api/Home/fifth_section.json'


const Home = () => {

    const [ firstSection, setFirstSection ] = useState([])
    const [ thirdSection, setThirdSection ] = useState ([])
    const [ fifthSectionApi, setFifthSectionApi ] = useState ([])

    useEffect (() => {
        document.title = "Digital Marketing | All Digital Services You Get From Here"
    }, [])

    useEffect (() => {
        FirstSectionApi.map ( ( items ) => {
            return (
                setFirstSection (items)
            )
        } ) 
    }, [])

    useEffect (() => {
        ThirdSectionApi.map ( ( items ) => {
            return (
                setThirdSection( items )
            )
            // console.log(items);
        } )
    }, [])

    useEffect (() => {
        FifthSectionApi.map ( ( items ) => {
            return (
                setFifthSectionApi( items )
            )
        } )
    }, [])


    return (
        <>
            <div className="home_page_div">
                <div className="home_page_content text-center">
                    <h3 className="small_title">
                        { firstSection.smallTitle }
                    </h3>
                    <h1 className="big_title">
                        { firstSection.bigTitle }
                    </h1>
                    <p>
                        { firstSection.description }
                    </p>
                    <NavLink to='/' className="btn">{ firstSection.btn }</NavLink>
                </div>
            </div>

            <div className="second_section">
                {
                    SecondSectionApi.map ( (items) => {
                        return (
                            <h2 className="big_title text-center"> 
                                {
                                    items.bigTitle[0]
                                }
                                <br/> 
                                {
                                    items.bigTitle[1]
                                }
                            </h2>
                        )
                    })
                }
                <div className="few_services_div">
                    <div className="container">
                        <div className="row mt-5">
                            {
                                SecondSectionBottom.map ( ( items ) => {
                                    return (
                                        <div className="col-lg-3">
                                            <div className="service_div">
                                                <div className="row">
                                                        <div className="col-2">
                                                            <div className="icon">
                                                                <img src={ items.img } alt="icon" />
                                                            </div>
                                                        </div>
                                                    <div className="col-10">
                                                        <h4><b>{ items.divTitle }</b></h4>
                                                        <p className="mt-3">{ items.des }</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                        </div>
                        <div className="see_more text-center">
                            <NavLink to='/services' className="btn link-danger">See More</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 text-center">
                            <img className="home_third_section_img" src={thirdSection.img} alt="img" />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h2 className="big_title">{ thirdSection.bigTitle }</h2>
                            <p>{ thirdSection.description }</p>
                            <div className="third_section_btn">
                                <NavLink to='/' className='btn'>{ thirdSection.btn }</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="forth_section">
                {
                    ForthSectionTitle.map ( ( items ) => {
                        return (
                            <h2 className="big_title text-center">{ items.bigTitle }</h2>
                        )
                    } )
                }
                
                <div className="container">
                    <div className="row">
                        {
                            ForthSectionCard.map ( (items) => {
                                return (
                                    <div className="col-lg-4 col-sm-12 mt-3">
                                        <div className="success_div">
                                            <img src={ items.img } alt="img1" />
                                            <h2><b>{ items.cardTitle }</b></h2>
                                            <p>{ items.cardDescription }</p>
                                            <h5 className="pt-3"><b>{ items.author }</b></h5>
                                            <p>{ items.position }</p>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                        
                    </div>
                </div>
            </div>

            <div className="fifth_section">
                <div className="fifth_section_div text-center">
                    <h3 className="small_title">{ fifthSectionApi.smallTitle }</h3>
                    <h2 className="big_title">{ fifthSectionApi.bigTitle }<br/></h2>
                    <NavLink to='/' className="btn">{ fifthSectionApi.btn }</NavLink>
                </div>
            </div>
        </>
    )
}

export default Home