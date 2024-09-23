import React from 'react'
import OfferImg from "../Assets/brocoli.png"
import Salade from "../Assets/salade.png"
import Cessar from "../Assets/cesar.png"
import CountDown from './CountDown'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <div className="offer-container" >
      <div className="container-fluid">   
      <div className="detail-box">
            <h1>Special Offer </h1>
            <h2>
            Get <span>20%</span> off on all products this week.
            </h2>
            
           <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by</p>
            
            </div>
            <CountDown/>

      <div className="offer-items">
            <div className="offer-img-box">
            <img src={Salade} alt="offerimg"/>
         
          <div className='offer-text-box'>
                            <h3>Burrata Salade</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.</p>
                            <p><del>25.000 DT</del> <span className="primary-text">20.000 DT</span></p>
                        </div>
                        </div>

                        <div className="offer-img-box">
            <img src={OfferImg} alt="offerimg"/>
         
          <div className='offer-text-box'>
                            <h3>Broccoli Salade</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.</p>
                            <p><del>23.000 DT</del> <span className="primary-text">17.000 DT</span></p>
                        </div>
                        </div>

                        <div className="offer-img-box">
            <img src={Cessar  } alt="offerimg"/>
         
          <div className='offer-text-box'>
                            <h3>Cesar Salade</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.</p>
                            <p><del>22.000 DT</del> <span className="primary-text">19.000 DT</span></p>
                        </div>
                        </div>

          </div>
          
          <div className="offre-button">
           <Link to="menu"><button className='order-button'>Order Now</button></Link> 
            </div>
        </div>     
      </div>
  )
}

export default Offer
