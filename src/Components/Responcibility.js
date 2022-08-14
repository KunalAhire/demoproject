import React from 'react'

const Responcibility = () => {
    return (
        <div className='mx-auto container mt-5'>
            <div>
            <h1 className='text-center my-4 fs-1 fw-light'>SOCIAL Responcibility</h1>
            <div className='d-flex justify-content-center mt-2 align-items-center'>
                <div className='footerBorder' style={{width:'200px'}}></div> <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' /> <div className='footerBorderInverse' style={{width:'200px'}}></div>
            </div></div>
            <div className='row mt-5'>
                <div className='col-md-6'>
                <div className="card w-75 bg-opacity-25">
                        <div className="card-body">
                            <h5 className="card-title my-3">Education for the under-privileged</h5>
                            <p className="card-text" style={{textAlign:'justify'}}>We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.
</p>
                        </div>
                    </div>
                    <div className="card w-75 my-3">
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Support for Rural Farmers</h5>
                        </div>
                    </div>
                    <div className="card w-75 my-3">
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Spiritual</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src='https://files.globalgiving.org/pfil/10050/ph_10050_36540.jpg?m=1333736334000' width={'600px'} alt='students' />
                </div>
            </div>
        </div>
    )
}

export default Responcibility