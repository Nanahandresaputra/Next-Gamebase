'use client'

import { genresData } from '@/dummy-data/genres'
import { Checkbox, CheckboxGroup } from '@heroui/react'
import React from 'react'

const CategoryList = () => {

    const genres = genresData.results.map((data) => ({
        label: data.name,
        value: data.id
    }))

    return (
        <CheckboxGroup defaultValue={["buenos-aires", "london"]} label="Category" classNames={{ label: 'text-white/70 font-semibold mb-5', wrapper: 'grid grid-cols-2 lg:flex flex-col' }} >
            {genres.map((data, index) => (
                <Checkbox key={index} classNames={{ label: 'text-white/70', }} value={data.value.toString()}>{data.label}</Checkbox>
            ))}


        </CheckboxGroup>
    )
}

export default CategoryList