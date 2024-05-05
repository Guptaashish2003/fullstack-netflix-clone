import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { BannerImgTools,BannerVidsTools } from './BannerTools';

const BannerSwiper = () => {
  const banners =[1,2,3,4,5,6]
  return (
    <div className="bg-zinc-900 h-[56.25vw] text-white p-3 ">
       <Swiper navigation={true}  modules={[Navigation]} className="mySwiper h-[95vh]">
        <SwiperSlide><BannerVidsTools/></SwiperSlide>
        {
          banners.map((index)=>(
            <SwiperSlide key={index}><BannerImgTools/></SwiperSlide>
          ))         
        }
        
        
        
      </Swiper>
        
        

      </div>
  )
}

export default BannerSwiper