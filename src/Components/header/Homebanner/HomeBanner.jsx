import React from 'react'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "./homebanner.css"
import 'swiper/css';
import 'swiper/css/navigation';
const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Enable auto-slide
        autoplaySpeed: 3000,
      };
  return (
    <>
      {/* <div className="container mt-3">
        <div className="homeBannerSection">
          <Swiper 
              slidesPerView={1}
              spaceBetween={15}
              navigation={true}
              loop={false}
              autoplay={{
                delay: 2500,
                disableOnIntercation:false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
          >
              <SwiperSlide>
                <div className="item">
                  <img className='w-100' src="https://cmsimages.shoppersstop.com/main_banner_web_Adidas_puma_and_more_60203c0626/main_banner_web_Adidas_puma_and_more_60203c0626.png" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img className='w-100' src="https://cmsimages.shoppersstop.com/main_banner_web_Burberry_Versace_and_more_731c09b6dc/main_banner_web_Burberry_Versace_and_more_731c09b6dc.png" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img className='w-100' src="https://cmsimages.shoppersstop.com/main_banner_web_Casio_michael_kors_and_more_748c6ce782/main_banner_web_Casio_michael_kors_and_more_748c6ce782.png" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img className='w-100' src="https://cmsimages.shoppersstop.com/main_banner_web_Biba_fashor_and_more_a25a5c7d58/main_banner_web_Biba_fashor_and_more_a25a5c7d58.png" alt="" />
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div> */}








      <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
        <img src="https://cmsimages.shoppersstop.com/main_banner_web_Adidas_puma_and_more_60203c0626/main_banner_web_Adidas_puma_and_more_60203c0626.png"/>
        </div>
        <div className="item">
        <img src="https://cmsimages.shoppersstop.com/main_banner_web_Burberry_Versace_and_more_731c09b6dc/main_banner_web_Burberry_Versace_and_more_731c09b6dc.png" alt="" />
        </div>
        <div className="item">
        <img src="https://cmsimages.shoppersstop.com/main_banner_web_Casio_michael_kors_and_more_748c6ce782/main_banner_web_Casio_michael_kors_and_more_748c6ce782.png" alt="" />
        </div>
        <div className="item">
        <img src="https://cmsimages.shoppersstop.com/main_banner_web_Biba_fashor_and_more_a25a5c7d58/main_banner_web_Biba_fashor_and_more_a25a5c7d58.png" alt="" />
        </div>
        </Slider>
      </div>
    </>
  )
}

export default HomeBanner
