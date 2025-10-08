'use client'

import Image from 'next/image'
import React from 'react'

const BannerNews = () => {
    return (
        <section className={`relative overflow-hidden`}>
            <div className="absolute z-50 bottom-0 w-full gradient-shadow-btm-news h-[18vh] lg:h-[30vh]" />
            <div className="absolute z-50 top-0 w-full gradient-shadow-top-news h-[18vh] lg:h-[30vh]" />
            <div className="absolute z-50 h-full w-full flex justify-center items-center">
                <div className="h-[38vh] lg:h-[58vh] container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-white">
                    <p className='text-3xl lg:text-7xl font-bold drop-shadow-2xl'>Latest News & Game Reviews</p>
                    <p className='text-sm lg:text-xl drop-shadow-2xl'>Stay updated with the gaming world and check our top-rated games. </p>

                </div>
            </div>
            <div className="w-screen h-[40vh] lg:h-[67vh] ">
                <Image
                    src={'/assets/news-banner.webp'}
                    alt="imgurl"
                    className="object-cover object-top" fill
                />
            </div>
        </section>
    )
}

export default BannerNews
