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


    const genresData = initialGenres.map((data) => ({
        label: data.name,
        value: data.id
    }))

    const selectedGenres = (e: string) => {
        contextData?.setSelectGenre(e)
        store.dispatch(setListGamesAction.currentPage(1))
    }
    useEffect(() => {
        const load = () => {
            const raw = typeof window.localStorage.getItem('listGenres') !== "undefined" ? localStorage.getItem("listGenres") : null;
            if (raw) {
                setInitialGenres(JSON.parse(raw))
            };
        };

        load();

        const handler = (e: Event) => {

            const detail = (e as CustomEvent)?.detail;
            if (detail) setInitialGenres(detail);
            else load();
        };

        window.addEventListener("listGenresUpdated", handler);

        return () => {
            window.removeEventListener("listGenresUpdated", handler);
        };
    }, []);




    return (
        <CheckboxGroup onChange={(e) => selectedGenres(e.toString())} label="Category" classNames={{ label: 'text-white/70 font-semibold lg:mb-5', wrapper: 'grid grid-cols-2 lg:flex flex-col' }} >
            {genresData.map((data, index) => (
                <Checkbox key={index} classNames={{ label: 'text-white/70', }} value={data.value.toString()}>{data.label}</Checkbox>
            ))}


        </CheckboxGroup>
    )
}

export default CategoryList