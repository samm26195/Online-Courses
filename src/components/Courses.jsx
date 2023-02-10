import React from 'react'
import "../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css'

const Courses = () => {
    return (
        <>
            <div className="container wider-container padded-sec nsa-features">
                <div className="row text-center">
                    <h2 className="section-title">Why You Should Train With New Skills Academy…</h2>

                    <div className="col-12 col-md-4">
                        <span className="feature-icon">
                            <img src="../image/shuttle.png" alt="shuttle" />
                        </span>
                        <h3>Wide range of courses</h3>
                        <p>With courses ranging from dog grooming to retail banking, we’re bound to have the perfect one for you</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <span className="feature-icon">
                            <img src="../image/reading-book.png" alt="shuttle" />
                        </span>
                        <h3>Comprehensive Syllabus</h3>
                        <p>Every course comes with easy to understand, yet detailed lessons created by experts</p>
                    </div>
                    <div className="col-12 col-md-4 right-floted">
                        <span className="feature-icon">
                            <img src="../image/bus.png" alt="shuttle" />
                        </span>
                        <h3>Study Anywhere/Any time</h3>
                        <p>Study the course anywhere / any time on PC, mobile and tablet. You can even learn on your way to work</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <span className="feature-icon">
                            <img src="../image/online.png" alt="shuttle" />
                        </span>
                        <h3>Gain a Verifiable Qualification</h3>
                        <p>Once you have completed your end of course test, your qualification can be validated via our website 24/7</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <span className="feature-icon">
                            <img src="../image/team-management.png" alt="shuttle" />
                        </span>
                        <h3>Tutor Support</h3>
                        <p>Our friendly and knowledgeable tutors are on hand to offer support if you need it</p>
                    </div>
                    <div className="col-12 col-md-4 right-floted">
                        <span className="feature-icon">
                            <img src="../image/approve.png" alt="shuttle" />
                        </span>
                        <h3>Approved Courses</h3>
                        <p>All of our online courses have been checked and approved by CPD for your peace of mind</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Courses