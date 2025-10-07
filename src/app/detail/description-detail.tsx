'use client'

import { html } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

interface PropTypes {
    description: string,
    bannerImg: string
}

const DescriptionDetail = ({ description, bannerImg }: PropTypes) => {
    return (
        <section>
            {/* <div className="relative w-full h-[20vh]">
                <Image
                    unoptimized={true}
                    loader={() => bannerImg}
                    src={bannerImg}
                    alt="bannerImg"
                    className="object-cover rounded-md opacity-50" fill
                />
            </div> */}

        </section>
    )
}

export default DescriptionDetail