import React from 'react'
import "../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css'


const Navbar = () => {
    return (
        <>
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



        </>
    )
}

export default Navbar