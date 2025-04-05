"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Banners() {
    return (
        <div className="w-full max-w-screen-2xl mx-auto py-4 px-2 md:px-4 lg:px-6 mt-6">
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="rounded-xl overflow-hidden w-full aspect-[16/9] md:aspect-[21/9]"
            >
                <SwiperSlide className="relative w-full h-full">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/banner/1.png" 
                            alt="Banner 1" 
                            fill 
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                            className="object-cover object-center pointer-events-none select-none"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-full">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/banner/1.png" 
                            alt="Banner 2" 
                            fill 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                            className="object-cover object-center pointer-events-none select-none"
                        />
                    </div>
                </SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
        </div>
    );
}