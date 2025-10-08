'use client'

import React from 'react'
import BannerDetail from './banner-detail'
import { detailsGame } from '@/dummy-data/details-game'
import DetailInfo from './detail-info'

import { useRouter } from 'next/navigation'

const DetailGame = () => {

    const detailGame = detailsGame

    const genreNames = detailGame.genres.map((data) => data.name)
    const platformNames = detailGame.parent_platforms.map((data) => data.platform.name)
    const developerNames = detailGame.developers.map((data) => data.name)
    const publisherNames = detailGame.publishers.map((data) => data.name)


    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[2vh] grid grid-cols-8 gap-x-10">

            <div className='col-span-8 lg:col-span-5 space-y-4'>
                <BannerDetail />
                <p className='lg:hidden mb-7 text-white font-semibold text-2xl'>{detailGame.name}</p>
                <div dangerouslySetInnerHTML={{ __html: detailGame.description }} className='text-white/70 text-justify text-sm lg:text-base' />
                <div className='grid grid-cols-2 gap-6 text-sm lg:text-base'>
                    <p className='text-white text-xl font-semibold pb-3 border-b border-cyan-300 col-span-2'>{detailGame.name} System Requirements</p>
                    <div className='col-span-2 lg:col-span-1'>
                        <p className='font-semibold text-white'>Minimum</p>
                        <p className='text-white/70 text-justify'>{detailGame.platforms.find(data => data.platform.slug === 'pc')?.requirements.minimum}</p>
                    </div>
                    <div className='col-span-2 lg:col-span-1'>
                        <p className='font-semibold text-white'>Recomended</p>
                        <p className='text-white/70 text-justify'>{detailGame.platforms.find(data => data.platform.slug === 'pc')?.requirements.recommended}</p>
                    </div>
                </div>
            </div>
            <div className='col-span-8 lg:col-span-3 mt-10 lg:mt-0'>
                <p className='hidden lg:block mb-7 text-white font-semibold text-3xl'>{detailGame.name}</p>
                <DetailInfo released={detailGame.released} website={detailGame.website} genres={genreNames} parent_platforms={platformNames} esrbRating={detailGame.esrb_rating} rating={detailGame.rating} publisher={publisherNames} developers={developerNames} />
            </div>
        </section>
    )
}

export default DetailGame