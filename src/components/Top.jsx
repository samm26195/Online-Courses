import React from 'react'
import "../CSS/Media.css";
import '../CSS/Theme.css';
import '../App.css'

const Top = () => {
  return (
    <>
      <div className="topBanner" style={{ background: "#0504aa", color: "#ffffff", padding: "10px", textAlign: 'center', fontSize: "14px", position: "fixed", width: "100%", top: 0, left: 0, zIndex: 99 }}>
        Where will your learning take you? - Use code: GOALS79 to save 79% on ALL courses listed at £100
      </div>
    </>
  )
}

export default Top