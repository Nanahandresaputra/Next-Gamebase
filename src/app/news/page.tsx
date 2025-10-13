'use client'

import React, { useCallback, useContext, useEffect } from 'react'
import './index.css'
import BannerNews from './banner-news'
import { FaChevronRight } from 'react-icons/fa'
import { newsData } from '@/dummy-data/news'
import Image from 'next/image'
import { GlobalContext } from '../provider'
import { useRouter } from 'next/navigation'
import { DetailNewsInterface } from '../providerContext.interface'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { getNewsAction } from '@/store/features/news/news-slice'
import SkeletonNews from '@/components/skeleton-news'



const News = () => {

    const { data: newsList, isErrorNews, isLoadingNews } = useSelector((state: RootState) => state.newsGame)

    // const newsList = newsData.results


    const contextData = useContext(GlobalContext);

    const router = useRouter()


    const setDetailData = (detail: DetailNewsInterface) => {
        contextData?.setDetailNews({ title: detail.title, body: detail.body, authors: detail.authors, publish_date: detail.publish_date, image: detail.image })
        router.push('/news-detail')
    }


    const dispatch = useDispatch<AppDispatch>()

    const getNewsData = useCallback(() => {
        dispatch(getNewsAction())
    }, [])

    useEffect(() => {
        getNewsData()
    }, [])
    return (
        <section>
            <BannerNews />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[4vh] lg:mt-[8vh]">
                <p className='font-semibold text-white flex space-x-2 items-center'>
                    <span className='lg:text-2xl'>News</span>
                    <FaChevronRight className='lg:text-2xl' />

                </p>
                <div className='space-y-5'>
                    {
                        isLoadingNews ? <SkeletonNews /> :
                            newsList.map((data, index) => (
                                <div key={index} className='grid grid-cols-9 gap-x-8 border-b border-white/70 py-8 space-y-4 lg:space-y-0'>
                                    <div className="relative w-ful h-[18vh] lg:h-[24vh] rounded-md col-span-9 lg:col-span-3">
                                        <Image
                                            unoptimized={true}
                                            loader={() => data.image.original}
                                            src={data.image.original}
                                            alt="imgnews"
                                            className="object-cover object-top rounded-md" fill
                                        />
                                    </div>
                                    <div className='col-span-9 lg:col-span-6 flex flex-col justify-between space-y-3 lg:space-y-0'>
                                        <p className='text-sm lg:text-base text-white/40 font-semibold'>{data.authors}</p>
                                        <p className='lg:text-2xl font-semibold text-white'>{data.title}</p>
                                        <div className='space-y-4'>
                                            <p className='text-sm lg:text-xl text-white/70'>{data.lede}</p>
                                            <button className='text-white underline hover:cursor-pointer text-sm lg:text-xl' onClick={() => setDetailData(data)}>Read More</button>
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