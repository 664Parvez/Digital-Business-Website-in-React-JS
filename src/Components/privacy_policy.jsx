import React from 'react'
import { NavLink } from 'react-router-dom'

const Privacy_policy = () => {
  return (
    <>
        <div className="privacy_policy text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p><NavLink to='/'>TERMS AND CONDITION</NavLink></p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p><NavLink to='/'>PRIVACY AND COOKIES</NavLink></p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p><NavLink to='/'>REFUND POLICY</NavLink></p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p><NavLink to ='/'>DISCLAIMER</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Privacy_policy