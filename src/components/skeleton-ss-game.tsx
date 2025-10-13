'use client'

import React from 'react'

const SkeletonSSGame = () => {
    return (
        <div className="relative h-[5vh] lg:h-[10vh]">
            <div className="animate-pulse h-full w-full bg-gray-300 rounded-md"></div>
        </div>
    )
}

export default SkeletonSSGame