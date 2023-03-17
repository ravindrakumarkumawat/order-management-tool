import React from 'react'
import { AiOutlineHome, AiFillLayout, AiOutlineSetting, AiOutlineLogout, AiOutlineOrderedList } from "react-icons/ai";

import './index.css'
const Sidebar = () => {
  return (
    <aside className="child sidebar">
        <div>
        
        </div>
        <ul>
            <li><AiOutlineHome />Dashboard</li>
            <li><AiFillLayout />Product</li>
            <li><AiOutlineOrderedList/>Orders</li>
        </ul>
        <ul>
          <li><AiOutlineSetting />Setting</li>
          <li><AiOutlineLogout />Logout</li>
        </ul>
    </aside>
    
  )
}

export default Sidebar