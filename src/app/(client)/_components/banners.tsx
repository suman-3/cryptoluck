"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Banners() {
    return (
        <div className='w-full max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center relative p-4 overflow-hidden'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper rounded-xl overflow-hidden">
                <SwiperSlide>
                    <Image src="/banner/1.png" alt="banner 1" width={600} height={600} className='w-full h-auto pointer-events-none select-none' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/banner/1.png" alt="banner 1" width={600} height={600} className='w-full h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/banner/1.png" alt="banner 1" width={600} height={600} className='w-full h-auto' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
