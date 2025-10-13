'use client'

import React from 'react'

const SkeletonDetailDescription = () => {
    return (
        <section className='w-full space-y-3'>
            {[...new Array(5)].map((_, index) => (
                <div className='bg-gray-300 w-full h-[10vh]' key={index}></div>
            ))}
        </section>
    )
}

export default SkeletonDetailDescription