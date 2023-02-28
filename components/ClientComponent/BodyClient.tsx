"use client"

import VideoComponent from 'components/VideoComponent/VideoComponent'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Root } from 'types/api'
import AskComponent from './AskComponent'

interface props {
  client: Root
}

const BodyClient = ({ client }: props) => {

  const route = useRouter()

  return (
    <article className='p-4'>
      <header className='flex flex-col justify-center mt-2 space-y-2 mb-4'>
        <button className='bg-white rounded-lg p-2 w-1/3 mx-auto text-black'
          onClick={() => route.push("/home")}
        >Back to menu</button>
        <h1 className='text-center text-4xl capitalize'>
          client {client.cliente}
        </h1>
      </header>
      <section>
        <VideoComponent video={client.linkVideo} details={true} />
        <section className='py-2'>
          <p className='text-xl text-center capitalize'> Testing services: {client.plataforma}</p>
        </section>
        <section className='overflow-y-auto flex flex-col space-y-3'>
          <h3 className='capitalize text-lg'>Description Ask</h3>
          {
            client.preguntas.map((ask) => {
              return (
                <AskComponent key={ask.link} ask={ask} />
              )
            })
          }
        </section>
      </section>
    </article>
  )
}

export default BodyClient