"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import WinnerCard from "./winners-card";


export const TopWinnerSection = () => {
    const winnersData = [
        {
            id: 1,
            profileImage: "/avtar.png",
            name: "John Doe",
            contestName: "Contest 3"
        },
        {
            id: 2,
            profileImage: "/avtar.png",
            name: "Jane Smith",
            contestName: "Contest 5"
        },
        {
            id: 3,
            profileImage: "/avtar.png",
            name: "Alex Johnson",
            contestName: "Contest 2"
        },
        {
            id: 4,
            profileImage: "/avtar.png",
            name: "Maria Garcia",
            contestName: "Contest 7"
        },
        {
            id: 5,
            profileImage: "/avtar.png",
            name: "Robert Wilson",
            contestName: "Contest 1"
        },
        {
            id: 6,
            profileImage: "/avtar.png",
            name: "Emma Brown",
            contestName: "Contest 4"
        }
    ];

    return (
        <div className='w-full max-w-screen-2xl mx-auto flex flex-col gap-8 h-fit py-6 px-2 md:px-4 lg:px-6 relative'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-left text-white'>Top Winners</h1>
                <Button className='w-36 lg:w-44 active:scale-95 !h-10 lg:!h-13 rounded-full bg-custom-blue hover:bg-custom-blue/80 text-white font-normal tracking-wide cursor-pointer group text-[16px]'>
                    View All
                    <MoveRight className='size-5 shrink-0 group-hover:translate-x-1 transition' />
                </Button>
            </div>
            
            <div className="swiper-winner-prev absolute top-3/5 -translate-y-1/2 left-0 z-10 bg-custom-blue rounded-full p-2 shadow-lg cursor-pointer">
                <ChevronLeft className="text-white" />
            </div>
            <div className="swiper-winner-next absolute top-3/5 -translate-y-1/2 right-0 z-10 bg-custom-blue rounded-full p-2 shadow-lg cursor-pointer">
                <ChevronRight className="text-white" />
            </div>
            
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
                loop={true}
                navigation={{
                    prevEl: '.swiper-winner-prev',
                    nextEl: '.swiper-winner-next',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="w-full"
            >
                {winnersData.map((winner) => (
                    <SwiperSlide key={winner.id} className="h-auto">
                        <WinnerCard
                            className='w-full'
                            profileImage={winner.profileImage}
                            name={winner.name}
                            contestName={winner.contestName}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};