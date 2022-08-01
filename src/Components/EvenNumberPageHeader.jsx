import React from 'react'

const Even_page_header_section = ( { bigTitle, smallTitle, description } ) => {
    return (
        <>
            <div className="evenPageHeader">
                <div className="header_content text-center">
                    <h3 className='small_title'>{smallTitle}</h3>
                    <h2 className='big_title'>{bigTitle}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Even_page_header_section