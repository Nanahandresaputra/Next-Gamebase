'use client'

import { Checkbox, CheckboxGroup } from '@heroui/react'
import React from 'react'

const CategoryList = () => {
    return (
        <CheckboxGroup defaultValue={["buenos-aires", "london"]} label="Category" classNames={{ label: 'text-white/70 font-semibold text-2xl mb-5' }} >
            <Checkbox classNames={{ label: 'text-white/70 text-2xl', wrapper: 'h-8 w-8', icon: 'h-6 w-6', base: '!mt-3' }} value="buenos-aires">Buenos Aires</Checkbox>
            <Checkbox classNames={{ label: 'text-white/70 text-2xl', wrapper: 'h-8 w-8', icon: 'h-6 w-6', base: '!mt-3' }} value="sydney">Sydney</Checkbox>
            <Checkbox classNames={{ label: 'text-white/70 text-2xl', wrapper: 'h-8 w-8', icon: 'h-6 w-6', base: '!mt-3' }} value="san-francisco">San Francisco</Checkbox>
            <Checkbox classNames={{ label: 'text-white/70 text-2xl', wrapper: 'h-8 w-8', icon: 'h-6 w-6', base: '!mt-3' }} value="london">London</Checkbox>
            <Checkbox classNames={{ label: 'text-white/70 text-2xl', wrapper: 'h-8 w-8', icon: 'h-6 w-6', base: '!mt-3' }} value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
    )
}

export default CategoryList