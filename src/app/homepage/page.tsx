'use client'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import HeroSection from './hero-section'
import './index.css'
import ListGames from './list-games'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { getListGamesAction } from '@/store/features/game/game-slice'
import { getGenresHelpers } from '@/helpers/genres/genres'
import { GlobalContext } from '../provider'


const HomePage = () => {
    const listGamesData = useSelector((state: RootState) => state.listGames)
    const contextData = useContext(GlobalContext)

    const [currentPage, setCurrentPage] = useState<number>(1)

    const dispatch = useDispatch<AppDispatch>()

    const getDatas = useCallback(() => {
        if (contextData?.search && contextData?.search !== '' && contextData?.search?.length > 3 || contextData?.selectGenre && contextData?.selectGenre != '') {
            dispatch(getListGamesAction({ page: currentPage, ...(contextData?.selectGenre && contextData?.selectGenre != '' && { genres: contextData?.selectGenre }), ...(contextData?.search && contextData?.search !== '' && contextData?.search?.length > 3 && { search: contextData?.search }) }))
        }
    }, [currentPage, contextData])

    const getGenreList = useCallback(() => {
        getGenresHelpers()
    }, [])

    const getDatasInit = useCallback(() => {
        dispatch(getListGamesAction({ page: currentPage }))
    }, [])


    useEffect(() => {
        getDatasInit()
        getGenreList()
    }, [])

    useEffect(() => {
        getDatas()
    }, [getDatas])

    return (
        <section>
            <HeroSection listGames={listGamesData.data} isLoading={listGamesData.isLoading} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[8vh]">
                <ListGames listGames={listGamesData.data} isLoading={listGamesData.isLoading} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </section>
    )
}

export default HomePage