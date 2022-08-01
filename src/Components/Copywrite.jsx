import React from 'react'

const date = new Date()
let getYear = date.getFullYear()

const Copywrite = () => {
  return (
    <>
        <div className="copywrite text-center pt-2 pb-2">
            <p>&copy; 2016 - {getYear} Company Name. All Rights Reserved. | Design & Development By:- <b>Parvez Rabbi</b></p>
        </div>
    </>
  )
}

export default Copywrite