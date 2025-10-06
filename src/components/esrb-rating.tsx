'use client'

import React from 'react'

// "everyone" "everyone-10-plus" "teen" "mature" "adults-only" "rating-pending"

interface PropTypes {
    slug: string,
    name: string
}

const EsrbRatings = ({ slug, name }: PropTypes) => {
    return (
        <div>EsrbRatings</div>
    )
}

export default EsrbRatings