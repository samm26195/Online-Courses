import React from 'react'
import"../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css'

const Getaccess = () => {
  return (
    <>
     <section class="container wider-container">
            <div class="premiumBanner">
                <div class="row">
                    <div class="col-md-3 text-center">
                        <img src="../image/course-trophy.png" alt="course trophy"/>
                        <label class="premium_membership">Premium Membership</label>
                    </div>
                    <div class="col-md-9">
                        <h3 class="premium_title">Get Access To Our Entire Course Library</h3>
                        <div class="premium_price">
                            <span>Only</span>
                            <label><sup>£</sup>99</label>
                            <span>Per Year</span>
                        </div>
                        <ul class="premium_list">
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Study 700+ courses</li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Unlimited access to study <small>(max 50 active courses at any one time)</small></li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Career matching service</li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i> Free XO Student Discounts membership</li>                        </ul>
                           
                       
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Getaccess