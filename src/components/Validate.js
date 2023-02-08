import React from 'react'
import"../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css'

const Validate = () => {
  return (
    <>
      <section className="validate-students" id="validateFooter">
            <div className="container wider-container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 text-right">
                        Validate a student's qualification. Enter their certificate ID to begin.
                    </div>
                    <div className="col-12 col-md-4 text-left">
                        <div className="input-group mb-3">
                                <input type="text" className="form-control" name="cert" id="cert1" placeholder="Certificate ID" aria-label="Certificate ID" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#validateStudent"><i className="fas fa-check"></i></button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Validate