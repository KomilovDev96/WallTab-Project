import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from '../../../../components';
import "./style.scss"
import { ClientDATA, KartaDATA } from '../../../../fakerData';
const WeclientHomePage = ({ mode }) => {

    switch (mode) {
        case "client":
            return (
                <div className="clientHome">
                    <div className="clientHome_dec">
                        <h2>Мы ценим наших клиентов</h2>
                        <p>Главным стремлением нашей команды есть удовлетворенность клиента от сотрудничества с нашей командой.</p>
                        <Button theme="simple">
                            Заказать
                        </Button>
                    </div>
                    <div className="clientHome_carousel">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            slidesPerView={2}
                            freeMode={true}
                            spaceBetween={80}
                            modules={[Pagination, Autoplay]}
                            className="clientSwiperHome"
                            loop={true}
                        >
                            {ClientDATA.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='clientCarousel'>
                                        <div className='clientCarousel_image'>
                                            <img src={item.img} alt="png" />
                                        </div>
                                        <div className='clientCarousel_dec'>
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                        <div className='clientCarousel_avatar avatarCaroul'>
                                            <div className='avatarCaroul_image'>
                                                <img src={item.avatarImage} alt="png" />
                                            </div>
                                            <div className='avatarCaroul_dec'>
                                                <div className='avatarCaroul_name'>{item.avatar}</div>
                                                <div className='avatarCaroul_date'>{item.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )
        case "karta":
            return (
                <div className="kartaHome">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        freeMode={true}
                        speed={1000}
                        modules={[Pagination, Autoplay]}
                        className="kartaHomeSwiper"
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                    >
                        {KartaDATA.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='kartaHomeItem'>
                                    <div className='kartaHomeItem_image'>
                                        <img src={item.img} alt="png" />
                                    </div>
                                    <div className='kartaHomeItem_dec'>
                                        <h4 className='kartaHomeItem_title'>{item.titleM}</h4>
                                        <h3 className='kartaHomeItem_titleX'>{item.title}</h3>
                                        <p className='kartaHomeItem_text'>{item.text}</p>
                                        <Button theme="outlet">
                                            Заказать
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )
    }

}
export default WeclientHomePage