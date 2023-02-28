"use client"

import Link from 'next/link'
import React from 'react'

interface props {
  option: string
  selected: boolean
  url: string
  handleClick: () => void
}

const OptionComponent = ({ handleClick, option, url,selected }: props) => {


  return (
    <Link href={url}>
      <p  className={` p-2 ${selected ? "bg-white text-black":"text-gray-300"}`} onClick={()=>handleClick()}>{option}</p>
    </Link>
  )
}

export default OptionComponent