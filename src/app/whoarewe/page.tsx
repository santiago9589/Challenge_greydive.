"use client"

import React from 'react'
import Image from 'next/image'
import image from "../../../public/360_F_344119928_RswQ1dC3oORVpjHA3bzrDyMq9wvGAQ9S.jpg"
import { useLogged } from 'store/store'

const WhoAreWe = () => {

  const { logged } = useLogged()

  return (
    <>
      {
        logged ? (
          <section>
            <h1 className='text-center text-2xl capitalize'>Who are we?</h1>
            <p className='w-full font-serif text-lg my-2'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos quod accusamus
              mollitia nobis sint libero aliquid,
              assumenda incidunt? Dolore amet asperiores
              tenetur vitae ab atque cumque autem ad,
              laborum incidunt.
            </p>
            <h1 className='text-center text-2xl capitalize'>Vision</h1>
            <p className='w-full font-serif text-lg mt-2'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos quod accusamus
              mollitia nobis sint libero aliquid,
              assumenda incidunt? Dolore amet asperiores
              tenetur vitae ab atque cumque autem ad,
              laborum incidunt.
            </p>
            <Image className='w-[350px] xl:w-1/2 xl:mx-auto' src={image} alt="logo" />
          </section>
        ) : (null)
      }
    </>
  )
}

export default WhoAreWe