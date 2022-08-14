import React from 'react'
export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light px-5" style={{ height: "70px" }}>
            <div className="header" style={{ display: 'flex'}}>

                <div className="nav-menu mx-3">
                    <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' alt='logo' width='70px' className='mt-3' />
                </div>

                <div className="menu mx-5">
                    <ul id="featureList" style={{ display: 'flex', listStyleType: 'none'}}>
                        <li className='mx-4 mt-4 fs-6'>PROJECTS <hr className='border' /></li>
                        <li className='mx-4 mt-4 fs-6'>OUR PROCESS <hr className='border' /></li>
                        <li className='mx-4 mt-4 fs-6'>TESTIMONIALS <hr className='border' /></li>
                        <li className='mx-4 mt-4 fs-6'>CAREERS <hr className='border' /></li>
                        <li className='mx-4 mt-4 fs-6'>ABOUT US <hr className='border' /></li>
                        <li className='mx-4 mt-4 fs-6'>CONTACT US <hr className='border' /></li>
                        <li className='mx-4 mt-4 fs-6'>DIVERSIFICATION <hr className='border' /></li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}