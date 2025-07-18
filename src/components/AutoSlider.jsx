// components/AutoSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const AutoSlider = ({ slides }) => {

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer group">

                        {/* Image with hover scale */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl opacity-70"></div>

                        {/* Title Text */}
                        <div className="absolute bottom-6 left-10 flex text-white text-2xl font-semibold drop-shadow-md">
                            {item.title}
                        </div>
                    </div>
                </SwiperSlide>



            ))}
        </Swiper>
    );
};

export default AutoSlider;
