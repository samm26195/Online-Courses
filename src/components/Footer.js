import React from 'react'
import"../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css'

const Footer = () => {
  return (
    <>
    <footer>
    <section className="main-footer padded-sec">
        <div className="container wider-container">
            <div className="row footer-up">
                <div className="col-12 col-md-4 text-left">
                    <a href="">
                        <img src="../image/logo-white.png" alt="NSA Logo" className="footer-logo"/>
                    </a>
                    <p>Part of the Be-a Education Ltd Family</p>
                    <p>Reg no: 08761384</p>
                    <p>Vat no: 382819269</p>
                    <p className="copy">© New Skills Academy 2023</p>
                    <p className="copy small">
                        All prices are in GBP.
                    </p>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <span><img src="../image/trustpilot.png" alt="trust pilot" style={{maxWidth:"140px;"}}/></span>
                    <span><img src="../image/stars-image.png" alt="stars" style={{width:"190px;"}}/></span>
                    <a href="https://newskillsacademy.co.uk/teens-unite">
                        <span className="teens-logo"><img src="../image/teens.png" alt="teens"/></span>
                    </a>
                </div>
                <div className="col-12 col-md-4">
                    <ul className="footer-right-menu">
                        <li><a href="https://newskillsacademy.co.uk/terms-conditions-supply-products" rel="nofollow">Terms & Conditions of Supply of products</a></li>
                        <li><a href="https://newskillsacademy.co.uk/terms-website-use" rel="nofollow">Terms of Website Use</a></li>
                        <li><a href="https://newskillsacademy.co.uk/website-acceptable-use-policy" rel="nofollow">Website Acceptable Use Policy</a></li>
                        <li><a href="https://newskillsacademy.co.uk/privacy-notice" rel="nofollow">Privacy Notice</a></li>
                        <li><a href="https://newskillsacademy.co.uk/cookie-policy" rel="nofollow">Cookie Policy</a></li>
                        <li><a href="https://newskillsacademy.co.uk/your-information" rel="nofollow">Your Data</a></li>
                        <li><a href="https://newskillsacademy.co.uk/assets/cdn/Be-A Healthcare Modern Slavery Policy v1.0.docx.pdf" rel="nofollow">Modern Slavery Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="row footer-down align-items-center">
                <div className="col-12 col-md-12 col-lg-9">
                    <ul className="footer-menu">
                        <li><a href="https://newskillsacademy.co.uk/about">About</a></li>
                        <li><a href="https://newskillsacademy.co.uk/contact">Contact</a></li>
                        <li><a href="https://newskillsacademy.co.uk/blog">Blog</a></li>
                                                <li><a href="https://secure.tesco.com/clubcard/vouchers/new-skills-academy/UK-010027.prd" rel="noreferrer" target="_blank">Tesco Clubcard</a></li>
                                                <li><a href="https://newskillsacademy.co.uk/become-affiliate">Become an Affiliate</a></li>
                        <li><a href="https://newskillsacademy.co.uk/testimonials">Testimonials</a></li>
                        <li><a href="https://newskillsacademy.co.uk/achievers">Achiever Board</a></li>
                        <li><a href="https://newskillsacademy.co.uk/gift">Gift Card</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-3 social-icons">
                    <a href="https://www.youtube.com/channel/UCaAEqYg-mA-3obmB5Z18Xhw" rel="noreferrer" target="_blank" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com/newskillsacademyUK/" rel="noreferrer" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/NewSkillsAcad" rel="noreferrer" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/newskillsacademy/" rel="noreferrer" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </section>


</footer>
    
    </>
  )
}

export default Footer