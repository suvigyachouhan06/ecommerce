import React from 'react'
import Logo from "../../assets/e-logo.jpg"
import "./Header.css"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
            <div className="container">
                <p className="mb-0 mt-0 text-center"> Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay </p>
            </div>
        </div>

      <div className="header">
        <div className="container">
            <div className="row">
                <div className="logoWrapper d-flex align-items-center col-sm-3">
                    <Link to={'/'}><img src={Logo}></img></Link>
                </div>
                <div className='col-sm-9 d-flex align-items-center part2'>
                    <Button className='countryDrop'>
                        <div className="info d-flex flex-column">
                            <span className='location'>Your Location</span>
                            <span className='name'>India</span>
                        </div>
                       <span className='ms-auto'><FaAngleDown/></span>
                      
                    </Button>

                    {/* header search start here */}
                    <div className="headerSearch ms-3 me-3">
                      <input type="text" placeholder='Search your Products' />
                       <Button><IoIosSearch/></Button>
                    </div>

                    {/* header search end here  */}

                    <div className="user-icon d-flex align-items-center ms-auto">
                      <Button className='circle me-3'><FaRegUser/></Button>
                      <div className='ms-auto cartTab'>
                        <span className='price'>Rs 120</span>
                        <Button className='circle ms-2'><FaCartShopping/></Button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Header
