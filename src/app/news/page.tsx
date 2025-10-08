'use client'

import React, { useContext } from 'react'
import './index.css'
import BannerNews from './banner-news'
import { FaChevronRight } from 'react-icons/fa'
import { newsData } from '@/dummy-data/news'
import Image from 'next/image'
import { DetailNewsInterface, GlobalContext } from '../provider'
import { useRouter } from 'next/navigation'



const News = () => {

    const newsList = newsData.results

    const contextData = useContext(GlobalContext);

    const router = useRouter()


    const setDetailData = (detail: DetailNewsInterface) => {
        contextData?.setDetailNews({ title: detail.title, body: detail.body, authors: detail.authors, publish_date: detail.publish_date, image: detail.image })
        router.push('/news-detail')
    }
    return (
        <section>
            <BannerNews />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[8vh]">
                <p className='font-semibold text-white flex space-x-2 items-center'>
                    <span className='text-2xl'>News</span>
                    <FaChevronRight className='text-2xl' />

                </p>
                <div className='space-y-5'>
                    {newsList.map((data, index) => (
                        <div key={index} className='grid grid-cols-9 gap-x-8 border-b border-white/70 py-8'>
                            <div className="relative w-ful h-[24vh] rounded-md col-span-3">
                                <Image
                                    unoptimized={true}
                                    loader={() => data.image.original}
                                    src={data.image.original}
                                    alt="imgnews"
                                    className="object-cover object-top rounded-md" fill
                                />
                            </div>
                            <div className='col-span-6 flex flex-col justify-between'>
                                <p className='text-white/40 font-semibold'>{data.authors}</p>
                                <p className='text-2xl font-semibold text-white'>{data.title}</p>
                                <div className='space-y-4'>
                                    <p className='text-xl text-white/70'>{data.lede}</p>
                                    <button className='text-white underline hover:cursor-pointer text-xl' onClick={() => setDetailData(data)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News