import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, EffectCoverflow, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import Krishna from "../../img/Krishna.jpg";
import IceAndFire from "../../img/ice and fire.jpg";
import Abstract from "../../img/abstract art.jpg";
import Ganesh from "../../img/ganesh.jpg";
import WomenInWoods from "../../img/women in woods.jpg";
import FireWomen from "../../img/Fire Women.jpg";
import BlueMoon from "../../img/Blue moon.jpg";
import ShriRam from "../../img/Shri Ram.jpg";
import RedRain from "../../img/Red Rain.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Hobbies</span>
      <span>Abstract Arts</span>

      {/* slider */}
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Krishna} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FireWomen} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IceAndFire} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Abstract} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BlueMoon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RedRain} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ganesh} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={WomenInWoods} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ShriRam} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
