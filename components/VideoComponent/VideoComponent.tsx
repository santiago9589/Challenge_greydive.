import React from 'react'

interface props {
    video: string
    details:boolean
}

const VideoComponent = ({ video,details }: props) => {
    return (
        <section className="w-full">
            <video className="w-full" controls={details} loop={details} autoPlay={details} muted={details}>
                <source src={video} type="video/mp4" />
            </video>
        </section>
    )
}

export default VideoComponent