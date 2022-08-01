import React from 'react'

const Odd_page_header_section = ( { bigTitle, smallTitle, description } ) => {
    return (
        <>
            <div className="oddPageHeader">
                <div className="header_content text-center">
                    <h3 className='small_title'>{ smallTitle }</h3>
                    <h2 className='big_title'>{ bigTitle }</h2>
                    <p>{ description }</p>
                </div>
            </div>
        </>
    )
}

export default Odd_page_header_section