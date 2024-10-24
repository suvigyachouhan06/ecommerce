import React, { useRef, useState  } from 'react'
import HomeBanner from '../../Components/header/Homebanner/HomeBanner'
import { IoMdArrowRoundForward } from "react-icons/io";
import Button from '@mui/material/Button'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import ProductItem from '../../Components/productitem/ProductItem';
import HomeCat from '../../Components/HomeCat/HomeCat';
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
 
  var productSliderOptions = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true
  };
  return (
    <>
      <HomeBanner/>
      <HomeCat/>


      <section className='homeProducts'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
              <div className="banner">
              <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726765914/1726765914505_1726335353673_New_Project_26.jpg" alt="img" className='cursor' />
              </div>
                   
              <div className="banner2 mt-4">
              <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726335522/1726335520004_home-20-product-block-collection-3.webp" alt="img" className='cursor' />
              </div>
          
              </div>


              
            </div>

            <div className="col-md-9 productrow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className='mb-0 hd'>BEST SELLERS</h3>
                  <p className="text text-sml mb-0">Do not miss the currnt offers untill the end of March</p>
                </div>
                <Button className='viewAllBtn ms-auto'>View All <IoMdArrowRoundForward/></Button>
              </div>

              <div className="product_row w-100">
              <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
              >
                <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                  <p className="text text-sml mb-0">New Products with updated stocks</p>
                </div>
                <Button className='viewAllBtn ms-auto'>View All <IoMdArrowRoundForward/></Button>
              </div>
              <div className="product_row productRow2 w-100 mt-4 d-flex">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
              </div>    

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726055723/1726055722522_New_Project_9.jpg" alt="" className='cursor w-100'/>
                </div>

                <div className="banner">
                  <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726055766/1726055765071_New_Project_20.jpg" alt="" className='cursor w-100'/>
                </div>

                {/* <div className="banner mt-4">
                  <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726055723/1726055722522_New_Project_9.jpg" alt="" className='cursor w-100'/>
                </div> */}
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className='newsLetterSection mt-3 mb-3 d-flex align-items-center'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                  <p className="text-white mb-1">Rs 300 discount for your first order</p>
                  <h3 className="text-white">Join our newsletter and get...</h3>
                  <p className="text-secondary">Join our email subscription now to get updates on <br /> promotions and coupons.</p>
            <form action="">
              <IoMailOutline/>
              <input type="text" placeholder='Your E-mail Address' />
              <Button>Subscribe</Button>
            </form>
            </div>
            <div className="col-md-6">
              <img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
