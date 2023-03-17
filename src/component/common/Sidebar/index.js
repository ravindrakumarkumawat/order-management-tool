import React from 'react'
import { AiOutlineHome, AiFillLayout, AiOutlineSetting, AiOutlineLogout, AiOutlineOrderedList } from "react-icons/ai";
import './index.css'
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="k-flex k-fdc k-jcsb h-100">
        <ul>
            <li className="sidebar__nav-item">
              <AiOutlineHome /><span className="sidebar__nav-item--name">Dashboard</span>
            </li>
            <li className="sidebar__nav-item">
              <AiFillLayout /><span className="sidebar__nav-item--name">Product</span>
            </li>
            <li className="sidebar__nav-item">
              <AiOutlineOrderedList/><span className="sidebar__nav-item--name">Orders</span>
            </li>
        </ul>
        <ul>
          <li className="sidebar__nav-item">
            <AiOutlineSetting /><span className="sidebar__nav-item--name">Setting</span>
          </li>
          <li className="sidebar__nav-item">
            <AiOutlineLogout /><span className="sidebar__nav-item--name">Logout</span>
          </li>
        </ul>

      </div>
    </aside>
    
  )
}

export default Sidebar