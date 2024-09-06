import React from 'react'
import Logo from "../../assets/e-logo.jpg"
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
            <div className="container">
                <p className="mb-0 mt-0 text-center"> Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay </p>
            </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
            <div className="row">
                <div className="logoWrapper col-sm-3">
                    <Link to={'/'}><img src={Logo}></img></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
