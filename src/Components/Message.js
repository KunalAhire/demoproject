import React from 'react'

const Message = () => {
    return (
        <div className='message mt-5'>
            <br />
            <br />
            <div className='card mx-auto text-center' style={{ width: '700px' }}>
                <div>
                    <h1 className='text-center my-5 fs-1 fw-light'>Corporate Social Responsibility</h1>
                </div>
                <img src='https://thumbs.dreamstime.com/b/senior-as-business-manager-experience-96766034.jpg' className="rounded-circle mx-auto" alt='CEO' width={'200px'} height={'200px'} />
                <div className='d-flex justify-content-center my-3 align-items-center'>
                <div className='footerBorder' style={{width:'200px'}}></div>  <img src='https://lofrev.net/wp-content/photos/2016/07/abstract_logo_vector.png' width={'80px'} alt='Logo' /> <div className='footerBorderInverse' style={{width:'200px'}}></div>
            </div>                <h2 className='mt-1'>Mr. Jayesh H. Pandya</h2>
                <p style={{ width: '400px', margin: '20px auto', fontWeight: 'bolder' }}>“When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home.”</p>

                <div style={{width:'80%',margin:'0 auto', fontSize:'15px'}}><p className='px-2' style={{textAlign:'justify'}}>
                    We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
                </p></div>
                
            </div>
        </div>
    )
}

export default Message