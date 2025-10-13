'use client'

import React, { CSSProperties, useMemo, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import Video from '@/components/videoplay';

import SkeletonTrailerGame from '@/components/skeleton-trailer-game';
import SkeletonSSGame from '@/components/skeleton-ss-game';
import { ResultScreenshot, ResultTrailer } from '@/store/features/game-detail/detail.interface';

interface PropTypes {
    trailerData: ResultTrailer[];
    screenshot: ResultScreenshot[];
    isLoadingSs: boolean;
    isLoadingTrailer: boolean;
    isErrorSs: boolean;
    isErrorTrailer: boolean;
}

const BannerDetail = ({ trailerData, screenshot, isLoadingSs, isLoadingTrailer, isErrorSs, isErrorTrailer }: PropTypes) => {


    const mediaset = useMemo(() => {
        const trailerGame = trailerData.map((data) => ({ preview: data.preview, isData: data.data[480] }))[0]
        const ssGame = screenshot?.map((data) => ({ preview: data.image, isData: data.image }))
        const mediadata = [trailerGame, ...ssGame].filter(data => data !== undefined)

        return mediadata

    }, [trailerData, screenshot])



    console.log({ trailerData, screenshot })

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

    console.log({ mediaset })

    return (
        <section className='space-y-3'>
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
                            {isLoadingTrailer || isLoadingSs ? <SkeletonTrailerGame /> :
                                index === 0 && trailerData.length > 0 ? (
                                    <Video videoUrl={data?.isData ?? 'https://www.youtube.com/watch?v=3Df-26ZtIPA'} className='h-[25vh] lg:h-[53vh] w-full object-cover rounded-t-md' poster={data?.preview ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'} />
                                ) : (
                                    <div className="relative h-[25vh] lg:h-[53vh] ">
                                        <Image
                                            unoptimized={true}
                                            loader={() => data?.isData ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'}
                                            src={data?.isData ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'}
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
                            {isLoadingSs ? <SkeletonSSGame /> : <div className="relative h-[5vh] lg:h-[10vh] ">
                                <Image
                                    unoptimized={true}
                                    loader={() => data?.preview ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'}
                                    src={data?.preview ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'}
                                    alt="imgurl"
                                    className="object-cover rounded-md" fill
                                />
                            </div>}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}

export default BannerDetail