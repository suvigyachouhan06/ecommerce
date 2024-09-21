import React, { useState } from 'react'
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
import { MdKeyboardArrowRight } from "react-icons/md";

import "./navigation.css"
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpenSidebarNav,setIsOpenSidebarNav]= useState(false)



  return (
    <nav>
    <div className="container my-4">
    <div className="row">
      <div className="col-sm-2 navPart1">
        <div className="cartWrapper">
        <Button className='allCatTab align-items-center' onClick={()=>setIsOpenSidebarNav(!isOpenSidebarNav)}>
          <span className='icon1 me-2'><IoIosMenu/></span>
          <span class='text'>ALL CATEGORIES</span>
          <span className='icon2 ms-2'><FaAngleDown/></span>
        </Button>

        <div className={`sidebarNav shadow ${isOpenSidebarNav===true ? "open":""}`}>
          <ul>
            <li><Link to="/"><Button>Men <div className="ms-auto"><MdKeyboardArrowRight/></div></Button></Link>
            <div className="submenu shadow">
            <li><Link to="/"><Button>Women</Button></Link></li>
            <li><Link to="/"><Button>Beauty</Button></Link></li>
            <li><Link to="/"><Button>Watches</Button></Link></li>
            <li><Link to="/"><Button>Footwear</Button></Link></li>
            <li><Link to="/"><Button>Kids</Button></Link></li>
            </div>
            </li>
            <li><Link to="/"><Button>Women <div className="ms-auto"><MdKeyboardArrowRight/></div></Button></Link>
            <div className="submenu shadow">
            <li><Link to="/"><Button>Women</Button></Link></li>
            <li><Link to="/"><Button>Beauty</Button></Link></li>
            <li><Link to="/"><Button>Watches</Button></Link></li>
            <li><Link to="/"><Button>Footwear</Button></Link></li>
            <li><Link to="/"><Button>Kids</Button></Link></li>
            </div>
            </li>
            <li><Link to="/"><Button>Beauty <div className="ms-auto"><MdKeyboardArrowRight/></div></Button></Link>
            <div className="submenu shadow">
            <li><Link to="/"><Button>Women</Button></Link></li>
            <li><Link to="/"><Button>Beauty</Button></Link></li>
            <li><Link to="/"><Button>Watches</Button></Link></li>
            <li><Link to="/"><Button>Footwear</Button></Link></li>
            <li><Link to="/"><Button>Kids</Button></Link></li>
            </div>
            </li>
            <li><Link to="/"><Button>Watches <div className="ms-auto"><MdKeyboardArrowRight/></div></Button></Link>
            <div className="submenu shadow">
            <li><Link to="/"><Button>Women</Button></Link></li>
            <li><Link to="/"><Button>Beauty</Button></Link></li>
            <li><Link to="/"><Button>Watches</Button></Link></li>
            <li><Link to="/"><Button>Footwear</Button></Link></li>
            <li><Link to="/"><Button>Kids</Button></Link></li>
            </div>
            </li>
            <li><Link to="/"><Button>Footwear<div className="ms-auto"><MdKeyboardArrowRight/></div></Button></Link>
            <div className="submenu shadow">
            <li><Link to="/"><Button>Women</Button></Link></li>
            <li><Link to="/"><Button>Beauty</Button></Link></li>
            <li><Link to="/"><Button>Watches</Button></Link></li>
            <li><Link to="/"><Button>Footwear</Button></Link></li>
            <li><Link to="/"><Button>Kids</Button></Link></li>
            </div>
            </li>
            <li><Link to="/"><Button>Kids <div className="ms-auto"><MdKeyboardArrowRight/></div></Button></Link>
            <div className="submenu shadow">
            <li><Link to="/"><Button>Women</Button></Link></li>
            <li><Link to="/"><Button>Beauty</Button></Link></li>
            <li><Link to="/"><Button>Watches</Button></Link></li>
            <li><Link to="/"><Button>Footwear</Button></Link></li>
            <li><Link to="/"><Button>Kids</Button></Link></li>
            </div>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="col-sm-10 navPart2 d-flex align-items-center ">
        <ul className="list list-inline ms-alto">
            <li className="list-inline-item"><Link to="/"><Button><IoHomeOutline/> &nbsp;HOME</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><GiClothes/>MEN</Button></Link>
            <div className="submenu shadow">
              <Link to="/"><Button>Clothing</Button></Link>
              <Link to="/"><Button>Footwear</Button></Link>
              <Link to="/"><Button>Watches</Button></Link>
            </div>
            </li>
            <li className="list-inline-item"><Link to="/"><Button><FaMobileAlt/>WOMEN</Button></Link>
            <div className="submenu shadow">
              <Link to="/"><Button>Clothing</Button></Link>
              <Link to="/"><Button>Footwear</Button></Link>
              <Link to="/"><Button>Watches</Button></Link>
            </div>
            </li>
            <li className="list-inline-item"><Link to="/"><Button><GiCakeSlice/>BEAUTY</Button></Link>
            <div className="submenu shadow">
              <Link to="/"><Button>Clothing</Button></Link>
              <Link to="/"><Button>Footwear</Button></Link>
              <Link to="/"><Button>Watches</Button></Link>
            </div>
            </li>
            <li className="list-inline-item"><Link to="/"><Button><MdOutlineLocalGroceryStore/>WATCHES</Button></Link>
            <div className="submenu shadow">
              <Link to="/"><Button>Clothing</Button></Link>
              <Link to="/"><Button>Footwear</Button></Link>
              <Link to="/"><Button>Watches</Button></Link>
            </div>
            </li>
            <li className="list-inline-item"><Link to="/"><Button><ImBlog/>KIDS</Button></Link>
            <div className="submenu shadow">
              <Link to="/"><Button>Clothing</Button></Link>
              <Link to="/"><Button>Footwear</Button></Link>
              <Link to="/"><Button>Watches</Button></Link>
            </div>
            </li>
            <li className="list-inline-item"><Link to="/"><Button><IoIosContact/>GIFT</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><ImBlog/>BLOGS</Button></Link></li>
            <li className="list-inline-item"><Link to="/"><Button><IoIosContact/>CONTACT US</Button></Link></li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Navigation
