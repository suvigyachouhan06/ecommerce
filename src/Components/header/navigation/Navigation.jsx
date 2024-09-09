import React from 'react'
import Button from '@mui/material/Button'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { IoIosContact } from "react-icons/io";

import "./navigation.css"
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
    <div className="container my-4">
    <div className="row">
      <div className="col-sm-2 navPart1">
        <Button className='allCatTab align-items-center'>
          <span className='icon1 me-2'><IoIosMenu/></span>
          <span class='text'>ALL CATEGORIES</span>
          <span className='icon2 ms-2'><FaAngleDown/></span>
        </Button>
      </div>

      <div className="col-sm-10 navPart2 d-flex align-items-center ">
        <ul className="list list-inline ms-alto">
            <li className="list-inline-item"><Link to="/"><Button><IoHomeOutline/> &nbsp;HOME</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><GiClothes/>FASHION</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><FaMobileAlt/>ELECTRONICS</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><GiCakeSlice/>BAKERY</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><MdOutlineLocalGroceryStore/>GROCERY</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><ImBlog/>BLOG</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><IoIosContact/>CONTACT US</Button></Link></li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Navigation
