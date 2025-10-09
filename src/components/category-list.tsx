'use client'

import { GlobalContext } from '@/app/provider'
import { ListGenres, ListGenres as ListGenresInterface } from '@/helpers/genres/genres.interfaces'
import { setListGamesAction } from '@/store/features/game/game-slice'
import { store } from '@/store/store'
import { Checkbox, CheckboxGroup } from '@heroui/react'
import React, { useContext, useEffect, useMemo, useState } from 'react'

const CategoryList = () => {

    const contextData = useContext(GlobalContext)

    const [initialGenres, setInitialGenres] = useState<ListGenres[]>([]);


    const genres = useMemo(() => {
        if (initialGenres) {
            return initialGenres.map((data) => ({
                label: data.name,
                value: data.id
            }))
        } else {
            return []
        }
    }, [initialGenres])

    const selectedGenres = (e: string) => {
        contextData?.setSelectGenre(e)
        store.dispatch(setListGamesAction.currentPage(1))
    }

    useEffect(() => {
        // This code will only run on the client-side
        const genres = localStorage?.listGenres;
        if (genres) {
            setInitialGenres(JSON.parse(genres));
        }
    }, []);


    return (
        <CheckboxGroup onChange={(e) => selectedGenres(e.toString())} label="Category" classNames={{ label: 'text-white/70 font-semibold lg:mb-5', wrapper: 'grid grid-cols-2 lg:flex flex-col' }} >
            {genres.map((data, index) => (
                <Checkbox key={index} classNames={{ label: 'text-white/70', }} value={data.value.toString()}>{data.label}</Checkbox>
            ))}


        </CheckboxGroup>
    )
}

export default CategoryList