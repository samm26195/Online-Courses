import React from 'react'
import '../App.css'
import "../CSS/Media.css";
import '../CSS/Theme.css';

const Total = () => {
  return (
    <>
      <section class="totals-section">
        <div class="container wider-container padded-sec learn-with-confidence">
          <div class="row text-center">
            <div class="col-4">
              <span class="totals-icon">
                <img src="../image/online-education.png" alt="totals" />
              </span>
              <label class="counter" data-count="1226">0</label>
              <p>TOTAL COURSES</p>
            </div>
            <div class="col-4">
              <span class="totals-icon">
                <img src="../image/group.png" alt="totals" />
              </span>
              <label class="counter" data-count="916141">0</label>
              <p>TOTAL STUDENTS</p>
            </div>
            <div class="col-4">
              <span class="totals-icon">
                <img src="../image/video.png" alt="totals" />
              </span>
              <label class="counter" data-count="9173">0</label>
              <p>TOTAL LESSONS</p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Total