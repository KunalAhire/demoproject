import React from 'react'

const About = () => {
    return (
        <div className='mx-auto'>
            <div>
                <h1 className='text-center my-4 fs-1 fw-light'>About Us</h1>
                <center><img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' /></center>
            </div>
            <div style={{ height: '300px' }} className='my-5'>
                <img src='https://graphicriver.img.customer.envatousercontent.com/files/249727281/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=79e901e7df7de0926ee36cbe323073ab' alt='family' width={'100%'} height={'200px'} />
            </div>
            <div className='text-center fs-5 fw-bolder'>
                <p style={{ width: '50%', margin: '0 auto' }}>We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in.  </p>
            </div>
            <div className='d-flex justify-content-center my-5 align-items-center'>
            <div className='footerBorder' style={{width:'200px'}}></div> <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' /><div className='footerBorderInverse' style={{width:'200px'}}></div>
            </div>

            {/* cards */}

            <div className='container aboutback '>
                <div style={{ width: '70%', margin: '25px auto' }} className='row'>
                    <div className="card col-md-6 m-3" style={{ width: "25rem" }}>
                        <img src="https://cdn.icon-icons.com/icons2/67/PNG/512/watch_13224.png" width={'100px'} className='mx-auto my-3' alt="..." />
                        <div className="card-body">
                            <p className="card-text">Our track record has been impeccable with <strong>project completion on time </strong>  and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our <strong> modern and urbane designs </strong> to their neighbours. </p>
                        </div>
                    </div>

                    <div className="card col-md-6 m-3" style={{ width: "25rem" }}>
                        <img src="https://pluspng.com/img-png/star-png-star-icon-1600.png" width={'100px'} className='mx-auto my-3' alt="..." />
                        <div className="card-body">
                            <p className="card-text">The Hetali Group is a redeveloper like no other with a <strong> profound focus on quality</strong> and <strong>long term satisfaction of its residents.</strong></p>
                        </div>
                    </div>

                    <div className="card col-md-6 m-3" style={{ width: "25rem" }}>
                        <img src="https://www.freeiconspng.com/uploads/handshake-icon-16.png" width={'100px'} className='mx-auto my-3' alt="..." />
                        <div className="card-body">
                            <p className="card-text">They just don't endeavour but build homes which make it's residents proud of their address <strong>by putting home-owners at the heart and soul of everything they do from start to finish and post completion.</strong></p>
                        </div>
                    </div>

                    <div className="card col-md-6 m-3" style={{ width: "25rem" }}>
                        <img src="https://cdn4.iconfinder.com/data/icons/real-estate-47/24/House_on_Hand-512.png" width={'100px'} className='mx-auto my-3' alt="..." />
                        <div className="card-body">
                            <p className="card-text">Hetali Group lives by the ethos of <strong>building homes to live and not houses to stay in.</strong></p>
                        </div>
                    </div>
                </div>
                {/* // Cards End */}

                <div className='blackBack'></div>

                <div style={{ width: '70%', margin: '25px auto' }}>
                    <p className='my-3 pb-3' style={{textAlign:'justify'}}>Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families!

                       <p className='my-3 pb-3' style={{textAlign:'justify'}}> The Hetali Group promises a lifestyle second to none. In a span of over four decades, the group has proved to be one of the most reputed real estate builders in the western suburbs of Mumbai with residences in prime locations such as Andheri, Goregaon, Vile Parle and Juhu.</p>

                      <p className='my-3 pb-3' style={{textAlign:'justify'}}>  Spearheaded by Mr Jayesh Pandya, the company's central ideology is to provide homes customized to the customer's requirements and home{`’`}s that are superior in nature keeping in mind the needs of the modern home user.</p>

                    </p>
                </div>
            </div>

        </div>
    )
}

export default About