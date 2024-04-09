import React from 'react'
import Sidebar from './Sidebar'
import {Outlet} from "react-router-dom";
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'

const Body = () => {
  return (
    <div className="flex">
       <Sidebar/>
       <Outlet/>
    </div>
  )
}

export default Body