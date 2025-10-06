import React from 'react'
import HeroSection from './hero-section'
import './index.css'
import ListGames from './list-games'


const HomePage = () => {
    return (
        <section>
            <HeroSection />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[8vh]">
                <ListGames />
            </div>
        </section>
    )
}

export default HomePage