import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './homecat.css'

const HomeCat = () => {
    const[itemBg, setItemBg]=useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#ecffec',
        '#fffceb',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#fffceb',
    ])
  return (
    <>
      
    <section className='homeCat'>
      <div className="container">
        <h3 className='mb-4 hd'>Featured Categories</h3>
        <Swiper
            slidesPerView={8}
            spaceBetween={30}
            navigation={true}
            slidesPerGroup={3}
            modules={[Navigation]}
            className="mySwiper"
            >
                {
                    itemBg.map((item,index)=>{
                return(
                    <SwiperSlide >
                        <div className="item text-center cursor" style={{background:item}}>
                            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png" alt="" />
                            <h6>Fashion</h6>
                        </div>
                    </SwiperSlide>
                        )
                    })
                }


        </Swiper>
      </div>
    </section>
    </>
  )
}

export default HomeCat

{/* <SwiperSlide>
    <div className="item">
        <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960839/1725960838876_3659898.png" alt="" />
        <h6>Electronics</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="item">
        <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960829/1725960828798_3514242.png" alt="" />
        <h6>Groceries</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="item">
        <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960814/1725960813279_1334203.png" alt="" />
        <h6>Footwear</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="item">
        <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960798/1725960797783_1940922.png" alt="" />
        <h6>Beauty</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="item">
        <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960784/1725960783990_3048398.png" alt="" />
        <h6>Wellness</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="item">
        <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726036714/1726036714463_13542454.png" alt="" />
        <h6>Bags</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="item">
        <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726113744/1726113743791_4259798.png" alt="" />
        <h6>Jewellery</h6>
    </div>
</SwiperSlide> */}