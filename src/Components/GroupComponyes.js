import React from 'react'

export const GroupComponyes = () => {
    return (
        <div className='mx-auto'>
            <div>
                <h1 className='text-center my-4 fs-1 fw-light'>Group Companies</h1>
            </div>
            <div className='d-flex justify-content-center my-5 align-items-center'>
            <div className='footerBorder' style={{width:'200px'}}></div>  <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' /> <div className='footerBorderInverse' style={{width:'200px'}}></div>
            </div>
            <div className='row container mx-auto'>

                <div className='col-md-3'>
                    <div className="card" style={{width: "18rem;"}}>
                        <img src="https://th.bing.com/th/id/OIP.12nDgScp8_0AB_Ps87aNggHaFj?pid=ImgDet&rs=1" height={'300px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">AGGRICULTURE</h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 mx-auto'>
                    <div className="card" style={{width: "18rem;"}}>
                        <img src="https://th.bing.com/th/id/OIP.bm8tS_OlFNU0iisn03RV9AHaMP?pid=ImgDet&rs=1" height={'300px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">FUEL</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{width: "18rem;"}}>
                        <img src="https://th.bing.com/th/id/OIP.hUnH-QMDdsoELOQVyhYDvQHaE8?pid=ImgDet&rs=1" height={'300px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">FOOD</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
