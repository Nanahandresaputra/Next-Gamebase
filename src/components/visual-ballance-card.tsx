'use client'

import React from 'react'
import './index.css'

interface PropTypes {
    label: string,
    value: string | number
}

const VisualBallanceCard = ({ label, value }: PropTypes) => {
    return (
        <section className='flex flex-col items-center justify-center space-y-4 rounded-md p-5 w-full lg:w-[25rem] h-[15vh] lg:h-[18vh] bg-visual-ballance-card'>
            <p className='font-bold text-3xl lg:text-6xl text-cyan-500'>{value}</p>
            <p className='text-white/70 text-sm lg:text-lg'>{label}</p>
        </section>
    )
}

export default VisualBallanceCard