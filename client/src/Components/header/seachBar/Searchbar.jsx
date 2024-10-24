import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button'
import "./searchbar.css"
const Searchbar = () => {
  return (
   
       <div className="headerSearch ms-3 me-3">
            <input type="text" placeholder='Search your Products' />
            <Button><IoIosSearch/></Button>
        </div>
    
  )
}

export default Searchbar
