'use client'

import EsrbRatings from '@/components/esrb-rating'
import moment from 'moment'
import React from 'react'

// interface Platform {
//     id: number,
//     name: string,
//     slug: string
// }

// interface ParentPlatform {
//     platform: Platform
// }

// interface Genre {
//     id: number,
//     name: string,
//     slug: string,
//     games_count: number,
//     image_background: string,
// }

// interface Developer {
//     id: number,
//     name: string,
//     slug: string,
//     games_count: number,
//     image_background:string
// }

interface EsrbRating {
    id: number,
    name: string,
    slug: string,
}


interface PropTypes {
    released: string | Date,
    website: string,
    rating: number,
    parent_platforms: string[],
    genres: string[]
    developers: string[],
    publisher: string[],
    esrbRating: EsrbRating
}

const DetailInfo = ({ released, website, rating, parent_platforms, genres, esrbRating, developers, publisher }: PropTypes) => {


    return (
        <section className='text-sm lg:text-base'>
            <div className='py-3 lg:py-5 border-white/70 border-y'>
                <EsrbRatings slug={esrbRating?.slug} name={esrbRating?.name} />
            </div>
            <div className='grid grid-cols-3 py-3 lg:py-5 border-white/70 border-b'>
                <p className='text-white/70'>Released</p>
                <p className='text-white text-end col-span-2 break-words'>{moment(released).format('DD MMMM YYYY')}</p>
            </div>
            <div className='grid grid-cols-3 py-3 lg:py-5 border-white/70 border-b'>
                <p className='text-white/70'>Rating</p>
                <p className='text-white text-end col-span-2 break-words'>{rating}</p>
            </div>
            <div className='grid grid-cols-3 py-3 lg:py-5 border-white/70 border-b'>
                <p className='text-white/70'>Genres</p>
                <p className='text-white text-end col-span-2 break-words'>{genres?.toString().replaceAll(',', ', ')}</p>
            </div>
            <div className='grid grid-cols-3 py-3 lg:py-5 border-white/70 border-b'>
                <p className='text-white/70'>Platforms</p>
                <p className='text-white text-end col-span-2 break-words'>{parent_platforms?.toString().replaceAll(',', ', ')}</p>
            </div>
            <div className='grid grid-cols-3 py-3 lg:py-5 border-white/70 border-b'>
                <p className='text-white/70'>Website</p>
                <p className='text-white text-end col-span-2 break-words'>{website}</p>
            </div>
            <div className='grid grid-cols-3 py-3 lg:py-5 border-white/70 border-b'>
                <p className='text-white/70'>Developers</p>

                <p className='text-white text-end col-span-2 break-words'>{developers?.toString().replaceAll(',', ', ')}</p>
            </div>
            <div className='grid grid-cols-3 py-3 lg:py-5 border-white/70 border-b'>
                <p className='text-white/70'>Publishers</p>
                <p className='text-white text-end col-span-2 break-words'>{publisher?.toString().replaceAll(',', ', ')}</p>
            </div>

        </section>
    )
}

export default DetailInfo