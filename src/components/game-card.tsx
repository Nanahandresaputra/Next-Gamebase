'use client'

import Image from 'next/image'
import React from 'react'
import { IoStar } from 'react-icons/io5'
import Button from './button'

interface PropTypes {
    imgUrl: string,
    title: string,
    rating: number
    onClick?: () => void,

}

const GameCard = ({ imgUrl, title, rating, onClick }: PropTypes) => {
    return (
        <section className='rounded-md bg-[#9290C3]/15 text-white/70 shadow-lg drop-shadow-xl relative' onClick={onClick}>
            <div className="relative w-full h-[20vh] lg:h-[30vh]">
                <Image
                    unoptimized={true}
                    loader={() => imgUrl}
                    src={imgUrl}
                    alt="imgurl"
                    className="object-cover rounded-t-md" fill
                />
            </div>
            <div className='p-3 space-y-3'>
                <p className='font-semibold lg:text-xl h-12 lg:h-16 hover:text-white hover:cursor-pointer'>{title}</p>
                <div className='flex justify-between items-center text-sm lg:text-base'>
                    <p >Rating</p>
                    <p className='flex items-center space-x-2'>
                        <span>{rating}</span>
                        <IoStar fill='gold' strokeWidth={10} />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default GameCard