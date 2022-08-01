import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BlogSinglePage from '../api/Blog/Blog_page.json'

const Blog_single_page = () => {

    const [ img, setImg ] = useState()
    const [ bigTitle, setBigTitle ] = useState ()
    const [ description, setDescription ] = useState ()

    const { slug } = useParams()

    useEffect (() => {
        BlogSinglePage.filter (( items ) => {
            if ( items.slug === slug ) {
                setImg (items.img)
                setBigTitle (items.bigTitle)
                setDescription (items.description)
            } else {
                console.error();
            }
        })
    })

  return (
    <>
        <div className="single_blog">
            <div className="container">
                <div className="single_blog_content">
                    <img src={ img } alt="" />
                    <h2>{bigTitle}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog_single_page