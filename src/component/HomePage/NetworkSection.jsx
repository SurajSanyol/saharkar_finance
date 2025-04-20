import React from 'react'
import mapImg from'../../assets/map.png'
import './LoanSection.css'
import { Link } from 'react-router'
import Button from '../CommonComponent/Button'
import './NetworkSection.css'
const NetworkSection = () => {
  return (
    <div style={{padding:"70px 0"}}>
          <div className="container">
            <div className="row">
              
              <div className='d-flex justify-content-center map-container row-gap-5'>

                <div className="col-lg-6">
                    <div className="d-flex justify-content-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <img src={mapImg} alt="" style={{objectFit:"contain"}}/>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="map-content" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <h2 className='poppins-semibold title' style={{fontSize:"2rem"}}>India Network </h2>
                        <p className='poppins-regular' style={{color:"rgba(0, 0, 0, 0.5)"}}>RTS Loan Consultancy Services has established a robust network throughout India, enabling us to connect clients with a diverse range of leading banks and financial institutions. Our nationwide presence ensures that we can provide tailored loan solutions and personalized financial advice to clients in every region. By leveraging our extensive partnerships, we empower individuals and businesses to access competitive rates, innovative products, and expert guidance, making the path to financial success clearer and more achievable for everyone.</p>
                       
                        <Link to={'/'} className='text-decoration-none mt-2'>
                              <Button text={"GET More Info"}/>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NetworkSection