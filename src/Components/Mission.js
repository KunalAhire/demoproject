import React from 'react'

export const Mission = () => {
    return (
        <div className='mx-auto'>
            <h1 className='text-center my-4 fs-1 fw-light'>Mission</h1>
            <div className='d-flex justify-content-center mt-2 align-items-center'>
                <div className='footerBorder' style={{width:'200px'}}></div> <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' /> <div className='footerBorderInverse' style={{width:'200px'}}></div>
            </div>
            <div className='row mt-5' >

                <div className='col-md-6'> <img src='https://jobsearchandinterviewcoach.com/wp-content/uploads/2014/10/box-with-bow.jpg' alt='gift' /></div>
               
                <div className='col-md-6 ' >
                    <div className="card w-75 bg-secondary bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title text-secondary my-3">Personalised</h5>
                            <p className="card-text">Our core idealogy is to provide personalised homes to meet the very specific needs of residents.</p>
                        </div>
                    </div>
                    <div className="card w-75 my-3">
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Committed</h5>
                        </div>
                    </div>
                    <div className="card w-75 my-3">
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Quality {`&`} Service Oriented</h5>
                        </div>
                    </div>
                    <div className="card w-75 my-3">
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Timely</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
