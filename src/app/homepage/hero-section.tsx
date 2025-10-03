"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/button";

const dataDummy = [
  {
    imgurl: "/assets/dummy/hero-section/game-1.webp",
    price: 500000,
  },
  {
    imgurl: "/assets/dummy/hero-section/game-2.webp",
    price: 720000,
  },
  {
    imgurl: "/assets/dummy/hero-section/game-3.webp",
    price: 300000,
  },
];

const HeroSection = () => {
  return (
    <section>
      <Swiper
        // pagination={{
        //   type: "progressbar",
        // }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataDummy.map((data, index) => (
          <SwiperSlide key={index}>
            <div className={`relative`}>
              <div className="absolute z-50 bottom-0 w-full gradient-shadow-btm h-[25vh]" />
              <div className="absolute z-50 top-0 w-full gradient-shadow-top h-[25vh]" />
              <div className="absolute z-50 h-full w-full flex justify-center items-center">
                <div className="h-[60vh] container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-end text-white">
                  <div className="space-y-3">
                    <p className="text-3xl font-semibold text-white">$ 99.87</p>
                    <Button shape="circle" className="text-xl font-semibold w-60 flex justify-center items-center" >Buy Now</Button>
                    <Button type="outlined" shape="circle" className="text-xl font-semibold w-60 flex justify-center items-center" >Add to Wishlist</Button>

                  </div>
                </div>
              </div>
              <div className="w-screen h-[90vh] ">
                <Image
                  src={data.imgurl}
                  alt="imgurl"
                  className="object-cover" fill
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
