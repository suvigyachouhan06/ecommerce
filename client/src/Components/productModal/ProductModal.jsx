import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button'
import React, { useContext, useRef, useState } from 'react'
import { MdClose } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import "./productmodal.css"



import { FaHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import QuantityBox from '../QuantityBox/QuantityBox';
import {myContext} from '../../App'
import ProductZoom from '../productZoom/ProductZoom';

const ProductModal = ({closeProductsModal}) => {


  const context=useContext(myContext);


 


  return (
    <>
        <Dialog className='productModal' open={true} onClose={()=>context.setIsOpenProductModal(false)}>
        <Button className='close_' onClick={()=>context.setIsOpenProductModal(false)}><MdClose/></Button>
        <h4 className='mb-1 font-weight-bold'>Siril Georgette Brown Color Saree with Blouse piece</h4>
        <div className="d-flex align-items-center">
        <div className="d-flex align-items-center me-4">
          <span>Brands:</span>
          <span className='ms-2'><b>SIRIL</b></span>
        </div>
        <Rating name="read-only" value={5} readOnly size="small" precision={0.5}/>
        </div>
        <hr />

        <div className="row mt-2 productDetaileModal">
          <div className='col-md-5'>
            <ProductZoom/>
          </div>

          <div className='col-md-7'>
            <div className="d-flex info align-items-center">
              <span className="oldPrice lg me-2">Rs 490</span>
              <span className="netPrice text-danger lg">Rs 450</span>
            </div>

            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-3">The saree is an outfit which women can carry off with great panache. With the right material and drape, it can accentuate the beauty of women of all ages and forms.

          </p>

          <div className="d-flex align-items-center">
           <QuantityBox/>
          <Button className="btn-blue btn-lg btn-big btn-round">
            Add To Cart
          </Button>
          </div>

          <div className="d-flex align-items-center actions mt-5">
            <Button className='btn-round btn-sml' variant='outlined'><FaHeart/>ADD TO WISHLIST</Button>

            <Button className='btn-round btn-sml compare ms-3' variant='outlined'><MdCompareArrows/>COMPARE</Button>
          </div>
          </div>
        </div>


        </Dialog>
    </>
  )
}

export default ProductModal;
