'use client'

import Image from 'next/image'
import React from 'react'
import './index.css'
import VisualBallanceCard from '@/components/visual-ballance-card'

const About = () => {

    const visualBallance = [
        {
            label: 'Games Listed',
            value: '10,000+'
        },
        {
            label: 'Game Enthusiasts',
            value: '200K+'
        },
        {
            label: 'Game Reviews',
            value: '500K+'
        },
    ]

    return (
        <section className='container mx-auto px-4 sm:px-6 lg:px-8 space-y-14 lg:space-y-36 overflow-hidden'>
            <div className={`relative overflow-hidden`}>
                <div className="absolute z-50 bottom-0 w-full gradient-shadow-btm-about h-[30vh] lg:h-[50vh]" />
                <div className="absolute z-50 h-full w-full flex flex-col items-center justify-center space-y-4 lg:space-y-8 text-white">
                    <p className='font-bold text-4xl lg:text-6xl drop-shadow-2xl shadow-lg'>About Us</p>
                    <p className='text-center w-full lg:w-6/12 drop-shadow-2xl text-sm lg:text-xl shadow-lg'>GameVerse is dedicated to bring you the best games from around the world. Our mission is to provide an unparallel gaming platform where your passion for play can thrive</p>
                </div>
                <div className="w-full h-[30vh] lg:h-[50vh] ">
                    <Image
                        unoptimized={true}
                        src={'/assets/banner-about.webp'}
                        alt="imgurlBannerdetailnews"
                        className="object-cover" fill
                    />
                </div>
            </div>
            <div className='space-y-10 lg:space-y-24'>
                <p className='font-bold text-4xl lg:text-6xl text-center text-white'>What We Offer</p>
                <div className={`relative overflow-hidden`}>
                    <div className="absolute z-50 bottom-0 w-full gradient-shadow-left h-[30vh] lg:h-[50vh]" />
                    <div className="absolute z-50 h-full w-full flex flex-col justify-center space-y-4 lg:space-y-8 text-white">
                        <p className='font-bold text-xl lg:text-3xl border-b w-80 border-cyan-500 pb-2'>Massive Game Library</p>
                        <p className='w-11/12 lg:w-5/12 drop-shadow-2xl text-sm lg:text-lg text-white/70 shadow-lg text-justify'>Dive into a vast collection of thousands of titles across every genre and platform. From action-packed shooters and immersive RPGs to relaxing puzzle games, our library grows every week to bring you the latest hits and timeless classics. Whether you’re a casual gamer or a hardcore enthusiast, you’ll always find something new to play.</p>
                    </div>
                    <div className="w-full h-[30vh] lg:h-[50vh] ">
                        <Image
                            unoptimized={true}
                            src={'/assets/about-1.webp'}
                            alt="imgurlBannerdetailnews"
                            className="object-cover rounded-md" fill
                        />
                    </div>
                </div>
                <div className={`relative overflow-hidden`}>
                    <div className="absolute z-50 bottom-0 w-full gradient-shadow-right h-[30vh] lg:h-[50vh]" />
                    <div className="absolute z-50 h-full w-full flex flex-col justify-center items-end space-y-4 lg:space-y-8 text-white">
                        <p className='font-bold text-xl lg:text-3xl border-b w-80 border-cyan-500 pb-2'>Gamers First</p>
                        <p className='w-11/12 lg:w-5/12 drop-shadow-2xl text-sm lg:text-lg text-white/70 shadow-lg text-justify'>Our mission is to put players at the heart of everything we do. From lightning-fast downloads to responsive customer support, every feature is designed with your gaming experience in mind. We listen to our community, adapt to your feedback, and constantly improve to make sure your journey is smooth, exciting, and rewarding.</p>
                    </div>
                    <div className="w-full h-[30vh] lg:h-[50vh] ">
                        <Image
                            unoptimized={true}
                            src={'/assets/about-2.webp'}
                            alt="imgurlBannerdetailnews"
                            className="object-cover rounded-md object-top-right" fill
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:justify-between items-center'>
                {
                    visualBallance.map((data, index) => (
                        <VisualBallanceCard key={index} label={data.label} value={data.value} />
                    ))
                }
            </div>
        </section>
    )
}

export default About