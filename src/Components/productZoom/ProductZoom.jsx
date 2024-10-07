import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from "react-slick";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./productzoom.css"
const ProductZoom = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const[activeSize,setActiveSize]=useState();
    const zoomSliderBig =useRef();
    const zoomSlider=useRef();
    
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
    </>
  )
}

export default ProductZoom
