
import { SliderDATA } from "../../fakerData"
import NavigateTop from "./NavigateTop"
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Container } from "styled-bootstrap-grid";
import SliderItem from "./components/SliderItem";

import "./style.scss"
const Header = () => {
    return (
        <div className="header">
            <NavigateTop />
            <div className="header_slider">
                <Container>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        freeMode={true}
                        speed={1000}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                    >
                        {SliderDATA.map((item, index) => (
                            <SwiperSlide key={index}>
                                <SliderItem item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>

            </div>
        </div >
    )
}

export default Header