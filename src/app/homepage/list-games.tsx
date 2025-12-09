'use client'

import Button from '@/components/button'
import CategoryList from '@/components/category-list'
import GameCard from '@/components/game-card'
import SkeletonCardGames from '@/components/skeleton-list-games'
import { setListGamesAction } from '@/store/features/game/game-slice'
import { ListGames as ListGamesInterface } from '@/store/features/game/game.interface'
import { store } from '@/store/store'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'

interface PropTypes {
    listGames: ListGamesInterface;
    isLoading: boolean;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const ListGames = ({ listGames, isLoading, currentPage, setCurrentPage }: PropTypes) => {
    const router = useRouter()


    const listDataGames = useMemo(() => {


        const listDatas = listGames.results
        const spliceDatas = listDatas.slice(3, listDatas.length)

        return spliceDatas
    }, [listGames])

    const toDetail = (gameId: number) => {
        localStorage.setItem('gameId', gameId.toString())
        router.push('/detail')
    }

    return (
        <section className='grid grid-cols-6'>
            <div className='col-span-6 lg:col-span-5 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5'>
                {
                    listDataGames.map((data, index) => (
                        isLoading ? <SkeletonCardGames key={index} /> : <GameCard key={index} imgUrl={data.background_image} title={data.name} rating={data.rating} onClick={() => toDetail(data.id)} />
                    ))
                }
                <div className=' col-span-2 lg:col-span-4 flex justify-center w-full mt-14'>
                    {/* <PaginationComp /> */}
                    {!isLoading && listDataGames.length > 0 && <Button type='outlined' shape='circle' onClick={() => {
                        setCurrentPage(currentPage + 1)
                        store.dispatch(setListGamesAction.currentPage(currentPage + 1))
                    }} >Load More</Button>}
                </div>
            </div>
            <div className='order-1 lg:order-2 col-span-6 lg:col-span-1 hidden lg:flex lg:justify-end'>
                <CategoryList />
            </div>
        </section>
    )
}

export default ListGames