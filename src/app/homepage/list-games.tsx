'use client'

import CategoryList from '@/components/category-list'
import GameCard from '@/components/game-card'
import PaginationComp from '@/components/pagination'
import { listGames } from '@/dummy-data/list-games'
import { Checkbox, CheckboxGroup } from '@heroui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ListGames = () => {
    const router = useRouter()

    return (
        <section className='grid grid-cols-6'>
            <div className='col-span-5 grid grid-cols-4 gap-5'>
                {
                    listGames.results.map((data, index) => (
                        <GameCard key={index} imgUrl={data.background_image} title={data.name} rating={data.rating} onClick={() => router.push('/detail')} />
                    ))
                }
                <div className='col-span-4 flex justify-center w-full mt-14'>
                    <PaginationComp />
                </div>
            </div>
            <div className='col-span-1 flex justify-end'>
                <CategoryList />
            </div>
        </section>
    )
}

export default ListGames