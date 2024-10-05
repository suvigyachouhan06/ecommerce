import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button'
import React, { useContext, useRef, useState } from 'react'
import { MdClose } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import "./productmodal.css"
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import QuantityBox from '../QuantityBox/QuantityBox';
import {myContext} from '../../App'

const ProductModal = ({closeProductsModal}) => {
  const [slideIndex,setSlideIndex]=useState(0);
  const[activeSize,setActiveSize]=useState();
  const zoomSliderBig =useRef();
  const zoomSlider=useRef();

  const context=useContext(myContext);

  var settings= {
    dots:false,
    infinite:false,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:1,
    fade:false,
    arrows:false
  }

  var settings2= {
    dots:false,
    infinite:false,
    speed: 700,
    slidesToShow:1,
    slidesToScroll:1,
    fade:false,
    arrows: false
  }

  const goto=(index)=>{
    setSlideIndex(index)
    zoomSlider.current.slickGoTo(index)
    zoomSliderBig.current.slickGoTo(index)
  }

  const isActive=(index)=>{
    setActiveSize(index);
  }


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
            <div className="productZoom">
              
              <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
              
                      <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={1}
                        src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541933/1726541933044_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp`}
                        />
                      </div>
                      <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={1}
                        src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541934/1726541933061_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg`}
                        />
                      </div>
                      <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={1}
                        src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541935/1726541933287_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp`}
                        />
                      </div>
                      <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={1}
                        src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541935/1726541933305_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp`}
                        />
                      </div>



               
              </Slider>


              
            </div>

            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
            <div className={`item ${slideIndex===0 && 'item_active'}`}>
                        <img src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541935/1726541933305_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp`} onClick={()=>goto(0)} className='w-100'
                        />
            </div>
            <div className={`item ${slideIndex===1 && 'item_active'}`}>
                        <img src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541934/1726541933061_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg`} onClick={()=>goto(1)} className='w-100'
                        />
            </div>
            <div className={`item ${slideIndex===2 && 'item_active'}`}>
                        <img src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541935/1726541933287_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp`} onClick={()=>goto(2)} className='w-100'
                        />
            </div>
            <div className={`item ${slideIndex===3 && 'item_active'}`}>
                        <img src={`https://res.cloudinary.com/da26rdzwp/image/upload/v1726541935/1726541933305_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp`} onClick={()=>goto(3)} className='w-100'
                        />
            </div>
            </Slider>
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
