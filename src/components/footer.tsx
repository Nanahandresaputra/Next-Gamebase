'use client'

import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='flex justify-center mt-[12vh] pb-[3vh]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-9'>
                <div className='col-span-4 space-y-5'>
                    <div className='flex space-x-3 items-center'>
                        <div className="relative w-10 h-10">
                            <Image
                                unoptimized={true}
                                // loader={() => imgUrl}
                                src={'/assets/g-logo.png'}
                                alt="imgurl"
                                className='object-fill'
                                fill
                            />
                        </div>
                        <p className='text-white font-semibold text-2xl'>GameBase</p>
                    </div>
                    <p className='text-white/70'>GameBase — Where every gamer levels up! From epic AAA adventures to indie gems, grab the hottest deals on PC, Xbox, PlayStation & Nintendo. Play more, pay less. 🎮</p>
                </div>
                <div className='col-span-1 flex justify-center'>
                    <div className='w-[1px] h-full bg-white/70' />
                </div>
                <div className='col-span-4 flex flex-col items-end '>
                    <div className='flex w-full justify-between'>
                        <div className='space-y-5'>
                            <p className='text-white font-semibold text-2xl text-start '>Navigation</p>
                            <div className='space-y-3'>
                                <p className='text-white/70'>Home</p>
                                <p className='text-white/70'>News</p>
                                <p className='text-white/70'>About</p>
                            </div>
                        </div>  <div className='space-y-5'>
                            <p className='text-white font-semibold text-2xl text-start '>Support</p>
                            <div className='space-y-3'>
                                <p className='text-white/70'>Terms and conditions</p>
                                <p className='text-white/70'>Privacy and cooki policy</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-white/70 flex items-center space-x-4 text-3xl mt-8'>
                        <FaInstagram />
                        <BsTwitterX />
                        <FaFacebook />
                        <FaDiscord />
                    </div>
                </div>
                <div className='col-span-9 w-full border-t border-white/70 flex justify-center mt-8 py-6'>
                    <p className='text-white/70'>Copyright GameBase {moment().format('YYYY')}, all rights reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer