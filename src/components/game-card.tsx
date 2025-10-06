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
            {/* <div className='absolute z-50 bg-black/70 w-full group-hover:h-full flex justify-center items-center rounded-md h-0 transition-all duration-500 bottom-0'>
                <div className='hidden group-hover:block'>
                    <Button shape='circle' type='outlined'>Detail</Button>
                </div>
            </div> */}
            <div className="relative w-full h-[10vh]">
                <Image
                    unoptimized={true}
                    loader={() => imgUrl}
                    src={imgUrl}
                    alt="imgurl"
                    className="object-cover rounded-t-md" fill
                />
            </div>
            <div className='p-3 space-y-3'>
                <p className='font-semibold text-xl h-16 hover:text-white hover:cursor-pointer'>{title}</p>
                <div className='flex justify-between items-center'>
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