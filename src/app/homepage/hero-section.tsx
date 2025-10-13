"use client";

import React, { CSSProperties, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/button";
import { IoStar } from "react-icons/io5";
import { ListGames as ListGamesInterface } from "@/store/features/game/game.interface";
import SkeletonHeroSectionHome from "@/components/skeleton-hero-section-home";
import { useRouter } from "next/navigation";

interface PropTypes {
  listGames: ListGamesInterface
  isLoading: boolean
}


const HeroSection = ({ listGames, isLoading }: PropTypes) => {


  const listDataGames = useMemo(() => {


    const listDatas = listGames.results
    const spliceDatas = listDatas.slice(0, 3)

    return spliceDatas
  }, [listGames])

  const router = useRouter()


  const toDetail = (gameId: number) => {
    localStorage.setItem('gameId', gameId.toString())
    router.push('/detail')
  }


  return (
    <section>
      {isLoading ? <SkeletonHeroSectionHome /> : (
        <Swiper
          // pagination={{
          //   type: "progressbar",
          // }}

          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as CSSProperties}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {listDataGames.map((data, index) => (
            <SwiperSlide key={index}>
              <div className={`relative`}>
                <div className="absolute z-50 bottom-0 w-full gradient-shadow-btm-home h-[46vh] lg:h-[45vh]" />
                <div className="absolute z-50 top-0 w-full gradient-shadow-top-home hidden lg:block h-[45vh]" />
                <div className="absolute z-50 h-full w-full flex justify-center items-center">
                  <div className="h-[40vh] lg:h-[80vh] container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-end text-white">
                    <div className="space-y-3 flex flex-col items-end">
                      <p className="text-3xl lg:text-6xl font-semibold text-white drop-shadow-2xl drop-shadow-black">{data.name}</p>
                      <Button shape="circle" onClick={() => toDetail(data.id)} className=" text-sm lg:text-xl font-semibold w-40 lg:w-60 flex justify-center items-center" >Detail</Button>
                      <div className="text-sm lg:text-xl font-semibold w-40 lg:w-60 rounded-full py-2 px-5 border border-white flex justify-between items-center">
                        <p >Rating</p>
                        <p className=' flex items-center space-x-2'>
                          <span>{data.rating}</span>
                          <IoStar fill='gold' strokeWidth={10} />
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="w-screen h-[46vh] lg:h-[90vh] ">
                  <Image
                    src={data.background_image}
                    alt="imgurl"
                    className="object-cover object-top" fill
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

    </section>
  );
};

export default HeroSection;
