import React from 'react'
import"../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css'


const Featured = () => {
  return (
    <><div className="container wider-container padded-sec as-featured">
    <div className="row text-center">
        <h4 className="section-title">As Featured In...</h4>
        <div id="asFeaturedSlider" className="carousel slide asFeaturedSlider" data-ride="false">
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <div className="col-12 text-center">
                        <a href="#"><img src="../image/bbc.png" alt="Featured"/></a>
                        <a href="#"><img src="../image/guardian.png" alt="Featured"/></a>
                        <a href="#"><img src="../image/itv.png" alt="Featured"/></a>
                        <a href="#"><img src="../image/vogue.png" alt="Featured"/></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div></>
  )
}

export default Featured