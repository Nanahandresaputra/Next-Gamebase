'use client'

import { KeyObjectType } from 'crypto'
import Image from 'next/image'
import React from 'react'

// "everyone" "everyone-10-plus" "teen" "mature" "adults-only" "rating-pending"

interface PropTypes {
    slug: string,
    name: string,
    className?: string
}

interface RatingParams {
    name: string
}




const ratingList = ({ name }: RatingParams) => ({
    'everyone': {
        img: '/assets/esrb/esrb-everyone.svg',
        name,
        description: 'Titles rated E (Everyone) have content that is generally suitable for all ages. May contain minimal cartoon, fantasy or mild violence and/or infrequent use of mild language.'
    },
    'everyone-10-plus': {
        img: '/assets/esrb/esrb-everyone10.svg',
        name,
        description: 'Titles rated E10+ (Everyone 10 and older) have content that is generally suitable for ages 10 and up. May contain more cartoon, fantasy or mild violence, mild language and/or minimal suggestive themes.themes.'
    },
    'teen': {
        img: '/assets/esrb/esrb-teen.svg',
        name,
        description: 'Titles rated T (Teen) have content that is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling, and/or infrequent use of strong language.'
    },
    'mature': {
        img: '/assets/esrb/esrb-mature.svg',
        name,
        description: 'Titles rated M (Mature) have content that is generally suitable for persons ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language.'
    },
    'adults-only': {
        img: '/assets/esrb/esrb-adults.svg',
        name,
        description: 'Titles rated AO (Adults Only) have content that is only suitable for persons ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language.'
    },
    'rating-pending': {
        img: '/assets/esrb/esrb-rp.svg',
        name,
        description: `Titles listed as RP (Rating Pending) have not yet been assigned a final ESRB rating. (This symbol appears only in advertising and promotional materials prior to a game's release, and will be replaced by a game’s rating once it has been assigned.)
`
    },
})

const EsrbRatings = ({ slug, name, className }: PropTypes) => {
    return (
        <section className={`${className} flex space-x-3`}>
            <div className="relative w-52">
                <Image
                    unoptimized={true}
                    src={ratingList({ name })[slug as keyof typeof ratingList]?.['img'] ?? 'https://www.codecks.io/_astro/steam_header.lQtF3kFc.jpg'}
                    alt="bannerImg"
                    className="object-contain" fill
                />
            </div>
            <p className='text-white/70 text-justify'>{ratingList({ name })[slug as keyof typeof ratingList]?.['description']}</p>
        </section>
    )
}

export default EsrbRatings