import React from 'react';
import "../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css';




const Header = () => {
    return (
        <>

            <header className="homeHeader">


                <div className="container home-banner-section wider-container">
                    <div className="home-banner">
                    </div>
                    <div className="row text-center">
                        <h2 className="home-banner-title">Change Your Life With A New Skill</h2>
                        <h3 className="home-banner-subtitle" style={{ color: "#fff;" }}>Join Over 916,000 students and study one of our <br /> 890+ career enhancing, confidence boosting courses</h3>
                        <div className="col-12 search-box">
                            <form action="" method="get" id="homeSearch">
                                <input type="text" name="search" placeholder="Find your perfect course..." className="search-field" />
                                <a className="search-button" href="" ><i className="fas fa-search"></i></a>
                            </form>
                        </div>
                        <div className="col-12 banner-buttons">
                            <a href="">See All Courses</a>
                            <a href="" className="featured"><i className="fas fa-medal"></i> Unlimited Learning</a>
                            <a href="">Redeem a Voucher</a>

                        </div>


                        <div className="col-12 reviews-home">


                            <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="5b450fa2ad92290001bfac20" data--height="160px" data--width="100%" data-theme="dark" data-stars="5" data-schema-type="Organization">
                            </div>

                        </div>
                    </div>
                </div>

            </header>

            <div className="searchFloat">
                <form name="search">
                    <input type="text" id="ajaxSearch" className="form-control" name="search" placeholder="Find your perfect course..." />
                    <i className="fa fa-search"></i>
                    <i className="fa fa-times"></i>
                    <div id="ajaxResultsSearch"></div>
                </form>
            </div>




        </>
    )
}

export default Header