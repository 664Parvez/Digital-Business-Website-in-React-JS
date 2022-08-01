import React, { useState, useEffect } from "react";
import Even_page_header_section from "./EvenNumberPageHeader";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaBehanceSquare } from 'react-icons/fa'

import ContactHeaderApi from '../api/Contact/header.json'
import AddressDivApi from '../api/Contact/address_section.json'
import FormImgApi from '../api/Contact/form_img_section.json'
import FormTitleApi from '../api/Contact/form_section_title.json'

const Contact = () => {

    const [ headerApi, setHeaderApi ] = useState ([])
    const [ formImg, setFormImg ] = useState ([])
    const [ formTitle, setFormTitle ] = useState ([])

    useEffect (() => {
        document.title = "Contact Us | Do you want to know anything contact us"
    }, [])

    useEffect ( () => {
        ContactHeaderApi.map( ( items ) => {
            setHeaderApi (items)
        } )
    }, [] )

    useEffect (() => {
        FormImgApi.map ( ( items ) => {
            setFormImg(items)
        } )
    }, [])

    useEffect ( () => {
        FormTitleApi.map(( items ) => {
            setFormTitle (items)
        })
    }, [] )


    return (
        <>
            <Even_page_header_section 
                smallTitle={ headerApi.smallTitle }
                bigTitle={ headerApi.bigTitle }
                description={ headerApi.description }
            />
            <div className="contact_section">
                <div className="container">
                    <div className="row text-center">

                        {
                            AddressDivApi && AddressDivApi.map( ( items ) => {
                                return (
                                    <div className="col-lg-4">
                                        <div className="all_contact_documents">
                                            <div className="icon">
                                                <img src={ items.img } alt="icon" />
                                            </div>
                                            <h4 className="title mt-3"><b>{ items.title }</b></h4>
                                            <p>{ items.contact[0] }</p>
                                            <p>{ items.contact[1] }</p>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
            </div>
            
            <div className="form_section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-6">
                            <img className="mt-5" src={ formImg.img } alt="" />
                        </div>
                        <div className="col-lg-7 col-sm-6">
                            <h2><b>{ formTitle.bigTitle }</b></h2>
                            <p>{ formTitle.description }</p>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-6 col-sm-12 email_form">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <textarea name="" id="" cols="30" rows="5" placeholder="Message" className="form-control mt-4"></textarea>
                                    </div>
                                </div>
                                <a href="" className="btn mt-3 btn-lg">SUBMIT</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact_social_media_section text-center">
                <ul>
                    <li><a href=""><FaFacebookSquare /></a></li>
                    <li><a href=""><FaInstagramSquare /></a></li>
                    <li><a href=""><FaLinkedin /></a></li>
                    <li><a href=""><FaTwitterSquare /></a></li>
                    <li><a href=""><FaBehanceSquare /></a></li>
                </ul>
            </div>

        </>
    )
}

export default Contact