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
                        <InnerImageZoom zoomType="hover" zoomScale={2}
                        src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`}
                        />
                      </div>
                      <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={2}
                        src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`}
                        />
                      </div>
                      <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={2}
                        src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`}
                        />
                      </div>
                      <div className="item">
                        <InnerImageZoom zoomType="hover" zoomScale={2}
                        src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`}
                        />
                      </div>



               
              </Slider>


              
            </div>

            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
            <div className={`item ${slideIndex===0 && 'item_active'}`}>
                        <img src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`} onClick={()=>goto(0)} className='w-100'
                        />
            </div>
            <div className={`item ${slideIndex===1 && 'item_active'}`}>
                        <img src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`} onClick={()=>goto(1)} className='w-100'
                        />
            </div>
            <div className={`item ${slideIndex===2 && 'item_active'}`}>
                        <img src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`} onClick={()=>goto(2)} className='w-100'
                        />
            </div>
            <div className={`item ${slideIndex===3 && 'item_active'}`}>
                        <img src={`https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/64b3470ZNYRIX00001800_1.jpg?rnd=20200526195200&tr=w-256`} onClick={()=>goto(3)} className='w-100'
                        />
            </div>
            </Slider>
    </>
  )
}

export default ProductZoom
