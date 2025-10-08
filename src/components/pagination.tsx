'use client'

import { Pagination, PaginationItem, PaginationCursor } from "@heroui/react";
import React from 'react'

const PaginationComp = () => {
    return (
        <Pagination showControls initialPage={1} total={2456} classNames={{ item: 'bg-transparent text-white/40 hover:cursor-pointer hover:text-white lg:text-lg lg:w-12 mr-3 lg:h-12 flex justify-center items-center hover:!bg-transparent', next: 'bg-[#1B1A55] rounded-full text-white hover:cursor-pointer hover:text-white/70 lg:text-lg lg:w-12 mr-3 lg:h-12 flex justify-center items-center hover:!bg-[#1B1A55]/70', prev: 'bg-[#1B1A55] rounded-full text-white hover:cursor-pointer hover:text-white/70 lg:text-lg lg:w-12 mr-3 lg:h-12 flex justify-center items-center hover:!bg-[#1B1A55]/70', cursor: 'text-white lg:text-lg lg:w-12 mr-3 lg:h-12 flex justify-center items-center bg- border rounded-full border-white' }} />
    )
}

export default PaginationComp