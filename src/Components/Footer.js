import React from 'react'

export const Footer = () => {
    return (
        <div className='mt-5'>

            <footer className="text-center text-lg-start bg-primary text-light">

                <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">

                    <div className="me-3 d-none d-lg-block">
                    <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' />
                    </div>

                    <div>
                        <strong>Quick Links</strong>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Testimonial</li>
                            <li>Gallery</li>
                            <li>Site Map</li>
                        </ul>
                    </div>

                    <div>
                        <strong>Flats in Mumbai</strong>
                        <ul>
                            <li>1BHK Andheri West</li>
                            <li>2 BHK Andheri West</li>
                            <li>3 BHK Andheri West</li>
                            <li>1BHK Goregaon East</li>
                            <li>2BHK Goregaon East</li>
                        </ul>
                    </div>

                    <div>
                        <strong>Projects in Mumbai</strong>
                        <ul>
                            <li>Ongoing</li>
                            <li>Upcoming</li>
                            <li>Completed</li>
                            <li>Hetali Blessings</li>
                            <li>Hetali Anuchhaya</li>
                        </ul>
                    </div>
                </section>
                <div className='d-flex justify-content-center mt-2 align-items-center'>
                <div className='footerBorder' style={{width:'200px'}}></div> <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' /> <div className='footerBorderInverse' style={{width:'200px'}}></div>
            </div>
            </footer>

        </div>
    )
}
