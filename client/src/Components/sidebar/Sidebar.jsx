import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from 'react-router-dom';
import "./sidebar.css"

const Sidebar = () => {
  const[value,setValue]=useState([100,60000])
  const[value2,setValue2]=useState(0)
  return (
    <div className='sidebar'>
      
      <div className="filterbox">
        <h6>PRODUCT CATEGORIES</h6>

        <div className="scroll">
          <ul>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Beauty" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Beauty" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Beauty" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
            </li>

            
          </ul>
        </div>
      </div>

      <div className="filterbox">
        <h6>FILTER BY PRICE</h6>

        <RangeSlider vlaue={value} onInput={setValue} min={100} max={60000} step={5}/>
        <div className="d-flex pt-2 pb-2 priceRange">
          <span>From: <strong className='text-success'>Rs: {value[0]}</strong></span>
          <span className='ms-auto'>From: <strong className='text-success'>Rs: {value[1]}</strong></span>
        </div>
      </div>

      <div className="filterbox">
        <h6>PRODUCT STATUS</h6>

        <div className="scroll">
          <ul>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" />
            </li>


            
          </ul>
        </div>
      </div>

      <div className="filterbox">
        <h6>BRANDS</h6>

        <div className="scroll">
          <ul>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
            </li>
            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
            </li>

            <li>
            <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
            </li>


            
          </ul>
        </div>
      </div>


      <br />
      <Link to="#"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="" className='w-100'/></Link>
    </div>
    
  )
}

export default Sidebar
