import React from 'react'
import {AiOutlineAlignRight, AiOutlineDribbble} from "react-icons/ai";
import './index.css'
const Header = () => {
  return (
    <header className="k-flex k-jcsb k-aic k-pl16 k-pr16">
      <div className="logo k-flex k-jcsb k-aic">
        <AiOutlineDribbble /> <span>OTM</span>
      </div>
      {/* <div className="menu-icon">
        <AiOutlineAlignRight />
      </div> */}
    </header>
  )
}

export default Header