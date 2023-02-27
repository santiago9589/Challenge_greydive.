import React from 'react'

interface props {
  name: string
  handleNavigation: () => void
  video: string
}

const CardClient = ({ name, handleNavigation, video }: props) => {
  return (
    <article className="flex flex-col space-y-2"onClick={() => handleNavigation()}>
      <h3 className='text-center mb-2 uppercase text-lg'>{`client ${name}`}</h3>
      <section className="w-full">
        <video  className="w-full">
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <h4 className='text-center mb-2 lowercase text-lg'>Click for more information...</h4>
    </article>
  )
}

export default CardClient