import React from 'react'
import Button from '@mui/material/Button';
import { IoMdArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../../../Components/productitem/ProductItem';
const RelatedProducts = ({title}) => {
  return (
    <>
      <div className="d-flex align-items-center mt-3">
                <div className="info w-75">
                  <h3 style={{fontSize:"18px"}} className='mb-0 hd'>{title}</h3>
                  {/* <p className="text text-sml mb-0">Do not miss the currnt offers untill the end of March</p> */}
                </div>
                {/* <Button className='viewAllBtn ms-auto'>View All <IoMdArrowRoundForward/></Button> */}
              </div>

              <div className="product_row w-100 mt-0">
              <Swiper
                  slidesPerView={5}
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
    </>
  )
}

export default RelatedProducts
