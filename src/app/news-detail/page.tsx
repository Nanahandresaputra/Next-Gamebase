'use client'

import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../provider'
import { useRouter } from 'next/navigation'
import './index.css'
import moment from 'moment'
import Image from 'next/image'




const NewsDetail = () => {
    const contextData = useContext(GlobalContext)

    const router = useRouter()

    useEffect(() => {
        if (!contextData?.detailNews.body) {
            router.push('/news')
        }
    }, [contextData?.detailNews])


    return (
        <section className='container mx-auto px-4 sm:px-6 lg:px-8  space-y-12 overflow-hidden'>
            <div className='relative'>
                <section className={`relative overflow-hidden`}>
                    <div className="absolute z-50 bottom-0 w-full gradient-shadow-btm-news-detail h-[15vh] lg:h-[25vh]" />
                    <div className="absolute z-50 top-0 w-full gradient-shadow-top-news-detail h-[15vh] lg:h-[25vh]" />
                    <div className="absolute z-50 h-full w-full flex flex-col items-center justify-end pb-3 lg:pb-10">
                        <p className='text-white font-semibold text-2xl lg:text-4xl drop-shadow-2xl text-center'>{contextData?.detailNews.title}</p>
                        <p className='italic drop-shadow-2xl'>
                            <span className='text-white text-sm lg:text-base'>By</span>{" "}
                            <span className='text-cyan-500 text-sm lg:text-base'>{contextData?.detailNews.authors}</span>{" "}
                            <span className='text-white text-sm lg:text-base'>On</span>{" "}
                            <span className='text-cyan-500 text-sm lg:text-base'>{moment(contextData?.detailNews.publish_date).format('DD MMM YYYY')}</span>
                        </p>
                    </div>
                    <div className="w-screen h-[30vh] lg:h-[50vh] ">
                        <Image
                            unoptimized={true}
                            loader={() => contextData?.detailNews.image?.original ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'}
                            src={contextData?.detailNews.image?.original ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'}
                            alt="imgurlBannerdetailnews"
                            className="object-cover" fill
                        />
                    </div>
                </section>


            </div>
            <div dangerouslySetInnerHTML={{ __html: contextData?.detailNews.body ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg' }} className='text-white/70 space-y-3 detailStyle text-justify text-sm lg:text-base' />
        </section>
    )
}

export default NewsDetail