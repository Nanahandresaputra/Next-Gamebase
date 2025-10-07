'use client'

import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../provider'
import { useRouter } from 'next/navigation'
import './index.css'
import moment from 'moment'




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
        <section className='container mx-auto px-4 sm:px-6 lg:px-8 mt-[8vh] space-y-12'>
            <div>
                <p className='text-white font-semibold text-3xl'>{contextData?.detailNews.title}</p>
                <p className='italic'>
                    <span className='text-white/70'>By</span>{" "}
                    <span className='text-cyan-500'>{contextData?.detailNews.authors}</span>{" "}
                    <span className='text-white/70'>On</span>{" "}
                    <span className='text-cyan-500'>{moment(contextData?.detailNews.publish_date).format('DD MMM YYYY')}</span>
                </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: contextData?.detailNews.body ?? '' }} className='text-white/70 space-y-3 detailStyle' />
        </section>
    )
}

export default NewsDetail