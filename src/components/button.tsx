'use client'

import React from 'react'

interface PropTypes {
  type?: string
  className?: string
  shape?: string
  children?: React.ReactNode
}

const Button = ({ type = 'fill', className, shape = 'square', children }: PropTypes) => {
  return (
    <div className={`py-2 px-5 hover:cursor-pointer ${shape === 'circle' ? 'rounded-full' : 'rounded-md'} ${type === 'outlined' ? 'border border-white text-white' : 'bg-white text-black'} ${className}`}>
      {children}
    </div>
  )
}

export default Button