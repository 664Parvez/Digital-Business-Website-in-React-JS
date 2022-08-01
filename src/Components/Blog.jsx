import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Odd_page_header_section from './OddNumberPageHeader'

import BlogHeaderApi from '../api/Blog/header.json'
import BlogPageApi from '../api/Blog/Blog_page.json'

const Blog = () => {

    const [ headerApi, setHeaderApi ] = useState ([])

    // useEffect (() => {
    //     document.title = "Blog Page | All blog is here"
    // }, [])

    useEffect ( () => {
        BlogHeaderApi.map( ( items ) => {
            setHeaderApi (items)
        } )
    }, [] )


    return (
        <>
            <Odd_page_header_section 
                smallTitle = { headerApi.smallTitle }
                bigTitle = { headerApi.bigTitle }
                description = { headerApi.description }
            />

            <div className="blog_page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                {
                                    BlogPageApi.map ( ( { id, img, slug, bigTitle, description, btn } ) => {

                                        const des = description.slice (0, 100)

                                        return (
                                            <>
                                                <div key={id}>
                                                    <div className="blog_div">
                                                        <div className="col-lg-12 col-sm-12">
                                                            <div className="img">
                                                                <img src={ img } alt="" />
                                                            </div>
                                                            <div className="blog_content">
                                                                <h2>{ bigTitle }</h2>
                                                                <p>{ des + " . . ." }</p>
                                                                <NavLink to={ slug }>{ btn }</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {
                                BlogPageApi.slice(0, 4).map ( ( items ) => {

                                    const sideDes = items.description.slice(0, 30)

                                    return (
                                        <>
                                        <div className="row" id='sidebar'>
                                            <div className='col-lg-5'>
                                                <img src={ items.img } alt="" />
                                            </div>
                                            <div className='col-lg-7'>
                                                <NavLink to={ items.slug }><h5>{ items.bigTitle }</h5></NavLink>
                                                <p>{ sideDes + " . . ." }</p>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog

