import React from 'react';
import '../App.css';
import"../media.css";
import '../theme.css';

//import "../../src/index.css";
//import 'C:\Users\SAMSUDDIN\Desktop\New project\myproject\testapp\src\index.css'



const Header = () => {
    return (
        <>
            <div className="topBanner" style={{ background: "#0504aa", color: "#ffffff", padding: "10px", textAlign: 'center', fontSize: "14px", position: "fixed", width: "100%", top: 0, left: 0, zIndex: 99 }}>
                Where will your learning take you? - Use code: GOALS79 to save 79% on ALL courses listed at £100                            </div>
            <header className="homeHeader">

                <div className="top-header">

                    <nav className="navbar navbar-expand-lg">

                        <div className="container wider-container">


                            <a className="navbar-brand" href="">
                                <img className="logo" src="../image/logo-white.png" alt="New Skills Academy" />
                                <img className="logo sticky" src="../image/logo-blue.png" alt="New Skills Academy" />
                            </a>


                            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="dark-blue-text"><i className="fas fa-bars fa-1x"></i></span>
                            </button>

                            <a className="nav-link cart mobileBasketToggle" data-toggle="modal" data-target="#basket" href="">
                                <span className="ajaxCartCount"></span>
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                            <div className="collapse navbar-collapse" id="navBar">

                                <ul className="nav navbar-nav ml-auto">

                                    <li className="nav-item link active">
                                        <a className="nav-link" href="">Home</a>
                                    </li>
                                    <li className="nav-item link ">
                                        <a className="nav-link" href="">Online Courses</a>
                                    </li>
                                    <li className="nav-item link ">
                                        <a className="nav-link" href="">Staff Training</a>
                                    </li>
                                    <li className="nav-item link ">
                                        <a className="nav-link" href="">Support</a>
                                    </li>
                                    <li className="right-icons">

                                        <a className="nav-link signIn" href="" data-toggle="modal" data-target="#signIn">Sign In</a>

                                    </li>

                                    <li className="right-icons">
                                        <a className="nav-link search" href=""><i className="fas fa-search"></i></a>
                                    </li>
                                    <li className="right-icons">

                                        <a className="nav-link cart" data-toggle="modal" data-target="#basket" href="">
                                            <span className="ajaxCartCount"></span>
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="close-menu d-md-none"><i className="fas fa-times-circle"></i></div>
                            </div>
                        </div>
                    </nav>
                </div>

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