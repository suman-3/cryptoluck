"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import ContestCard from "./contests-card";

import "swiper/css";
import "swiper/css/navigation";

export const ContestSection = () => {
  const contestsData = [
    {
      id: 1,
      profileImage: "/domain/contest/demo.png",
      title: "Billionaire Watch",
      price: "12 MSC | 12.00 USD",
      raffleNo: "112233445566778",
      marketProgress: 10,
      ticketsRemaining: "90%",
    },
    {
      id: 2,
      profileImage: "/domain/contest/demo.png",
      title: "Luxury Car",
      price: "25 MSC | 25.00 USD",
      raffleNo: "223344556677889",
      marketProgress: 35,
      ticketsRemaining: "65%",
    },
    {
      id: 3,
      profileImage: "/domain/contest/demo.png",
      title: "Gaming Console",
      price: "5 MSC | 5.00 USD",
      raffleNo: "334455667788990",
      marketProgress: 70,
      ticketsRemaining: "30%",
    },
    {
      id: 4,
      profileImage: "/domain/contest/demo.png",
      title: "Vacation Package",
      price: "30 MSC | 30.00 USD",
      raffleNo: "445566778899001",
      marketProgress: 25,
      ticketsRemaining: "75%",
    },
    {
      id: 5,
      profileImage: "/domain/contest/demo.png",
      title: "Premium Headphones",
      price: "8 MSC | 8.00 USD",
      raffleNo: "556677889900112",
      marketProgress: 60,
      ticketsRemaining: "40%",
    },
    {
      id: 6,
      profileImage: "/domain/contest/demo.png",
      title: "Smart Home Kit",
      price: "15 MSC | 15.00 USD",
      raffleNo: "667788990011223",
      marketProgress: 40,
      ticketsRemaining: "60%",
    },
  ];

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-8 h-fit py-6 px-2 md:px-4 lg:px-6 relative">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-left text-white">
          Join Contests
        </h1>
        <Button className="w-36 lg:w-44 active:scale-95 !h-10 lg:!h-13 rounded-full bg-custom-blue hover:bg-custom-blue/80 text-white font-normal tracking-wide cursor-pointer group text-[16px]">
          View All
          <MoveRight className="size-5 shrink-0 group-hover:translate-x-1 transition" />
        </Button>
      </div>
      <div className="swiper-contest-prev absolute top-3/5 -translate-y-1/2 left-0 z-10 bg-custom-blue rounded-full p-2 shadow-lg cursor-pointer">
        <ChevronLeft className="text-white" />
      </div>
      <div className="swiper-contest-next absolute top-3/5 -translate-y-1/2 right-0 z-10 bg-custom-blue rounded-full p-2 shadow-lg cursor-pointer">
        <ChevronRight className="text-white" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        navigation={{
          prevEl: ".swiper-contest-prev",
          nextEl: ".swiper-contest-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {contestsData.map((contest) => (
          <SwiperSlide key={contest.id} className="h-auto">
            <ContestCard
              className="w-full"
              profileImage={contest.profileImage}
              title={contest.title}
              price={contest.price}
              raffleNo={contest.raffleNo}
              marketProgress={contest.marketProgress}
              ticketsRemaining={contest.ticketsRemaining}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
