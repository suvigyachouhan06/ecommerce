import React from 'react'
import Logo from "../../assets/e-logo.jpg"
import "./Header.css"
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'


import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Searchbar from './seachBar/Searchbar'
import Dropbox from './dropBox/Dropbox'
import Navigation from './navigation/Navigation'


const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
            <div className="container">
                <p className="mb-0 mt-0 text-center"> Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay </p>
            </div>
        </div>

      <header className="header">
        <div className="container">
            <div className="row">
                <div className="logoWrapper d-flex align-items-center col-sm-3">
                    <Link to={'/'}><img src={Logo}></img></Link>
                </div>
                <div className='col-sm-9 d-flex align-items-center part2'>
                    
                  <Dropbox/>
                    {/* header search start here */}
                   <Searchbar/>

                    {/* header search end here  */}

                    <div className="user-icon d-flex align-items-center ms-auto">
                      <Button className='circle me-3'><FaRegUser/></Button>
                      <div className='ms-auto cartTab d-flex align-items-center'>
                        <span className='price ms-2 me-2'>Rs 120</span>
                        <div className="position-relative ms-2">
                        <Button className='circle'><FaCartShopping/></Button>
                        <span className='count ms-auto cartTab d-flex align-items-center'>1</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <Navigation/>

      </div>

    </div>
  )
}

export default Header
