'use client'

interface PropTypes {
    videoUrl: string,
    className?: string
    poster?: string
}

const Video = ({ videoUrl, className = 'h-[10vh] w-full', poster }: PropTypes) => {
    return (
        <video className={className} controls preload="none" poster={poster} >
            <source src={videoUrl} type="video/mp4" />

            Your browser does not support the video tag.
        </video>
    )
}

export default Video