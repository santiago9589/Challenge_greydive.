"use client"

import React from 'react'


const FooterComponent = () => {


  return (
    <footer className='flex justify-center mt-2 space-x-2 text-lg items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className='capitalize'>Copyrigth 2023 Santiago Parra</h3>
    </footer>
  )
}

export default FooterComponent