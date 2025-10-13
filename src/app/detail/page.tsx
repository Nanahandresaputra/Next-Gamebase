'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import BannerDetail from './banner-detail'
import DetailInfo from './detail-info'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { getDetailGameAction, getScreenshotGameAction, getTrailerGameAction } from '@/store/features/game-detail/detail-slice'
import { useRouter } from 'next/navigation'
import SkeletonDetailDescription from '@/components/skeleteon-detail-descripton'
import SkeletonDetailInfo from '@/components/skeleton-detail-info'


const DetailGame = () => {

    const { trailerData, screenshot, data, isLoading, isError, isLoadingSs, isLoadingTrailer, isErrorSs, isErrorTrailer } = useSelector((state: RootState) => state.detailGame)




    const detailData = useMemo(() => {
        const detailGame = data

        const genreNames = detailGame.genres?.map((data) => data.name)
        const platformNames = detailGame.parent_platforms?.map((data) => data.platform.name)
        const developerNames = detailGame.developers?.map((data) => data.name)
        const publisherNames = detailGame.publishers?.map((data) => data.name)

        return { detailGame, genreNames, platformNames, developerNames, publisherNames }
    }, [data])

    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const getDetailGame = useCallback(() => {
        const gameIdData = localStorage?.gameId

        if (gameIdData) {
            dispatch(getTrailerGameAction({ game_id: gameIdData }))
            dispatch(getScreenshotGameAction({ game_id: gameIdData }))
            dispatch(getDetailGameAction({ game_id: gameIdData }))
        } else {
            router.push('/homepage')
        }
    }, [])


    useEffect(() => {
        getDetailGame()
    }, [])


    const requirementsSpec =
        detailData.detailGame.platforms?.find(data => data.platform?.slug === 'pc')?.requirements


    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[2vh] grid grid-cols-8 gap-x-10">

            <div className='col-span-8 lg:col-span-5 space-y-4'>
                <BannerDetail trailerData={trailerData} screenshot={screenshot} isLoadingSs={isLoadingSs} isLoadingTrailer={isLoadingTrailer} isErrorSs={isErrorSs} isErrorTrailer={isErrorTrailer} />
                <p className='lg:hidden mb-7 text-white font-semibold text-2xl'>{detailData.detailGame.name}</p>
                {
                    isLoading ? <SkeletonDetailDescription /> : <div dangerouslySetInnerHTML={{ __html: detailData.detailGame.description }} className='text-white/70 text-justify text-sm lg:text-base' />
                }
                {
                    requirementsSpec?.minimum && requirementsSpec?.recommended && (
                        <div className='grid grid-cols-2 gap-6 text-sm lg:text-base'>
                            <p className='text-white text-xl font-semibold pb-3 border-b border-cyan-300 col-span-2'>{detailData.detailGame.name} System Requirements</p>
                            <div className='col-span-2 lg:col-span-1'>
                                <p className='font-semibold text-white'>Minimum</p>
                                <p className='text-white/70 text-justify'>{requirementsSpec?.minimum}</p>
                            </div>
                            <div className='col-span-2 lg:col-span-1'>
                                <p className='font-semibold text-white'>Recomended</p>
                                <p className='text-white/70 text-justify'>{requirementsSpec?.recommended}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='col-span-8 lg:col-span-3 mt-10 lg:mt-0'>
                <p className='hidden lg:block mb-7 text-white font-semibold text-3xl'>{detailData.detailGame.name}</p>
                {isLoading ? <SkeletonDetailInfo /> : <DetailInfo released={detailData.detailGame.released} website={detailData.detailGame.website} genres={detailData.genreNames} parent_platforms={detailData.platformNames} esrbRating={detailData.detailGame.esrb_rating} rating={detailData.detailGame.rating} publisher={detailData.publisherNames} developers={detailData.developerNames} />}

            </div>
        </section>
    )
}

export default DetailGame