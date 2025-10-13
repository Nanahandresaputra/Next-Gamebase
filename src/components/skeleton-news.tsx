'use client'

import React from 'react'

const SkeletonNews = () => {
    return (
        <div className='space-y-5'>
            {[...new Array(5)].map((_, index) => (
                <div className="grid grid-cols-9 gap-x-8 border-b border-white/70 py-8 space-y-4 lg:space-y-0" key={index}>
                    <div className="relative w-full h-[18vh] lg:h-[24vh] rounded-md col-span-9 lg:col-span-3 bg-gray-200 animate-pulse"></div>
                    <div className='col-span-9 lg:col-span-6 flex flex-col justify-between space-y-3 lg:space-y-0'>
                        <div className='h-4 bg-gray-200 rounded-md animate-pulse w-1/2'></div>
                        <div className='h-6 bg-gray-200 rounded-md animate-pulse w-3/4'></div>
                        <div className='space-y-4'>
                            <div className='h-4 bg-gray-200 rounded-md animate-pulse w-5/6'></div>
                            <button className='h-4 bg-gray-200 rounded-md animate-pulse w-1/4'></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonNews