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

    console.log(contextData?.detailNews)

    useEffect(() => {
        if (!contextData?.detailNews.body) {
            router.push('/news')
        }
    }, [contextData?.detailNews])


    return (
        <section className='container mx-auto px-4 sm:px-6 lg:px-8  space-y-12 overflow-hidden'>
            <div className='relative'>
                <section className={`relative overflow-hidden`}>
                    <div className="absolute z-50 bottom-0 w-full gradient-shadow-btm h-[25vh]" />
                    <div className="absolute z-50 top-0 w-full gradient-shadow-top h-[25vh]" />
                    <div className="absolute z-50 h-full w-full flex flex-col items-center justify-end pb-10">
                        <p className='text-white font-semibold text-4xl drop-shadow-2xl'>{contextData?.detailNews.title}</p>
                        <p className='italic drop-shadow-2xl'>
                            <span className='text-white/70'>By</span>{" "}
                            <span className='text-cyan-500'>{contextData?.detailNews.authors}</span>{" "}
                            <span className='text-white/70'>On</span>{" "}
                            <span className='text-cyan-500'>{moment(contextData?.detailNews.publish_date).format('DD MMM YYYY')}</span>
                        </p>
                    </div>
                    <div className="w-screen h-[50vh] ">
                        <Image
                            unoptimized={true}
                            loader={() => contextData?.detailNews.image?.original ?? ''}
                            src={contextData?.detailNews.image?.original ?? ''}
                            alt="imgurlBannerdetailnews"
                            className="object-cover" fill
                        />
                    </div>
                </section>


            </div>
            <div dangerouslySetInnerHTML={{ __html: contextData?.detailNews.body ?? '' }} className='text-white/70 space-y-3 detailStyle' />
        </section>
    )
}

export default NewsDetail