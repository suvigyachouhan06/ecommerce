import React from 'react'
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IoIosSearch } from "react-icons/io";
 
import "./dropbox.css"
const Dropbox = () => {

  
  return (
  <>
      <Button className='countryDrop'>
            <div className="info d-flex flex-column">
                <span className='location'>Your Location</span>
                <span className='name'>India</span>
            </div>
            <span className='ms-auto'><FaAngleDown/></span>
        
    </Button>
    <Dialog open={true} className='locationModal '>
    <DialogTitle>Choose Your Delivery Location</DialogTitle>
    <p>Enter your address and we will specify the offer for your area.</p>
    <div className="headerSearch w-100">
        <input type="text" placeholder='Search your Area..' />
        <Button><IoIosSearch/></Button>
    </div>
    </Dialog>
  </>  
  )
}

export default Dropbox
