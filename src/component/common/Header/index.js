import React from 'react'
import {AiOutlineAlignRight} from "react-icons/ai";

const Header = () => {
  return (
    <header className="child k-flex k-jcsb">
        <div class="logo">
          OTM
        </div>
        <div className="menu-icon">
          <AiOutlineAlignRight />
        </div>
    </header>
  )
}

export default Header