import React, { useState, useEffect } from 'react'
import {FaPhoneAlt, FaWhatsapp, FaRegEnvelope, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaBehanceSquare} from 'react-icons/fa'
import TopBar from '../api/Topbar/topbar.json'

const Topbar = () => {

  const [ topbarData, setTopbarData ] = useState([])

  useEffect (() => {
    TopBar.map ( ( items ) => {
      setTopbarData (items)
    } )
  })

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <ul className='number_mail'>
                <li><FaPhoneAlt /> | { topbarData.firstPhone }</li>
                <li><FaWhatsapp /> | { topbarData.secondPhone }</li>
                <li><FaRegEnvelope /> | { topbarData.email }</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12">
              <ul className='social_icon'>
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

export default Topbar