import React from 'react'
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";
import "./dropbox.css"
const Dropbox = () => {
  return (
  
      <Button className='countryDrop'>
            <div className="info d-flex flex-column">
                <span className='location'>Your Location</span>
                <span className='name'>India</span>
            </div>
            <span className='ms-auto'><FaAngleDown/></span>
        
    </Button>
    
  )
}

export default Dropbox
