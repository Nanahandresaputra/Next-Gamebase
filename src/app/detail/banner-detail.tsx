'use client'

import React, { CSSProperties, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { trailersGame } from '@/dummy-data/trailers-game';
import { screenshotsGame } from '@/dummy-data/screenshots-game';
import Image from 'next/image';
import Video from '@/components/videoplay';

const BannerDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
    const trailer = trailersGame.results.map((data) => ({ preview: data.preview, isData: data.data[480] }))[0]
    const screenshot = screenshotsGame.results.map((data) => ({ preview: data.image, isData: data.image }))

    const mediaset = [trailer, ...screenshot]

    console.log({ mediaset })

    return (
        <section>
            <Swiper
                // style={{
                //     '--swiper-navigation-color': '#fff',
                //     '--swiper-pagination-color': '#fff',
                // } as CSSProperties}
                loop={true}
                spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    mediaset.map((data, index) => (
                        <SwiperSlide key={index}>
                            {
                                index === 0 ? (
                                    <Video videoUrl={data.isData} className='h-[25vh] lg:h-[53vh] w-full object-cover rounded-t-md' poster={data.preview} />
                                ) : (
                                    <div className="relative h-[25vh] lg:h-[53vh] ">
                                        <Image
                                            unoptimized={true}
                                            loader={() => data.isData}
                                            src={data.isData}
                                            alt="imgurl"
                                            className="object-cover rounded-t-md" fill
                                        />
                                    </div>
                                )
                            }
                        </SwiperSlide>
                    ))
                }


            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                navigation={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as CSSProperties}
            >
                {
                    mediaset.map((data, index) => (
                        <SwiperSlide key={index}

                        >
                            <div className="relative h-[5vh] lg:h-[10vh] ">
                                <Image
                                    unoptimized={true}
                                    loader={() => data.preview}
                                    src={data.preview}
                                    alt="imgurl"
                                    className="object-cover rounded-md" fill
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}

export default BannerDetail