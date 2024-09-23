import React from 'react'
import art1 from "../Assets/art-1.png"
import BannerBackground from "../Assets/home-banner-background.png";

const Booking = () => {
  return (
    
      <div className="main_bg" id="booking">
    <div className="form">
    <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="form-text">
            <h1><span><img src={art1} alt="art"/></span>Book Now <span><img src={art1} alt="art"/></span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fugit.</p>
        </div>
        <div className="main-form">
            <form action="index.php" method="get">
                <div>
                    <span>Your full name ?</span>

<input type='text' name="name" id="name" placeholder="Write your name here..."/>
                </div>
                <div>
                    <span>Your email address ?</span>
                    <input type='email' name="email" id="email" placeholder="Write your name here..."/>
                </div>
                <div>
                    <span>How many people ?</span>
                    <select name="people" id="people" required>
                        <option value="">People</option>
                        <option value="1">1 People</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                    </select>
                </div>
                <div>
                    <span>What time ?</span>
                    <input type='text' name="time" id="time" placeholder="time"/>
                </div>
                <div>
                    <span>What is the date ?</span>
                    <input type="date" name="date" id="date" placeholder="date"/>
                </div>
                <div>
                    <span>Your phone number ?</span>
                    <input type="number" name="number" id="number" placeholder="Write your number here..."/>
                </div>
                <div>
                <button className='reserve-button'>Reserve</button>

                </div>


            </form>
        </div>
    </div>


</div>  
  )
}

export default Booking
