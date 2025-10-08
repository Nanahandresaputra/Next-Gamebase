'use client'

import React from 'react'

interface PropTypes {
  type?: string
  className?: string
  shape?: string
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ type = 'fill', className, shape = 'square', children, suffix, prefix, onClick }: PropTypes) => {
  return (
    <div onClick={onClick} className={`py-2 px-5 flex items-center space-x-3 hover:cursor-pointer ${shape === 'circle' ? 'rounded-full' : 'rounded-md'} ${type === 'outlined' ? 'border border-white text-white' : 'bg-white text-black'} ${className}`}>
      {prefix}
      {children}
      {suffix}
    </div>
  )
}

export default Button