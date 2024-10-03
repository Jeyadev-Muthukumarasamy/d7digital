import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css'; // Ensure your CSS styles are defined here

// Import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb250ZXh0fGVufDB8fHx8MTY4NDIxNjQyOA&ixlib=rb-4.0.3&q=80&w=800" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGNhbWVyYXxlbnwwfHx8fDE2ODQyMTY0Mjg&ixlib=rb-4.0.3&q=80&w=800" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDMxfHxhcnR8ZW58MHx8fHwxNjg0MjE2NDI4&ixlib=rb-4.0.3&q=80&w=800" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;