"use client"

import React from 'react'
import OptionComponent from './optionsComponent'
import image from "../../public/360_F_344119928_RswQ1dC3oORVpjHA3bzrDyMq9wvGAQ9S.jpg"
import Image from 'next/image'
import { useRoutes } from './hooks/useRoutes'
 

const NavbarComponent = () => {

    const [routes,currentRoute,setCurrentRoute,view,setView] = useRoutes()
    
    return (
        <nav className='flex justify-between border-2 shadow-sm rounded-lg p-2  w-full h-12 items-center' >
            <section>
                <Image src={image} style={{backgroundColor:"inherit"}} height="35" alt='logo'/>
            </section>
            <section className='w-32 text-center relative'>
                <button onClick={(e) => {
                    e.preventDefault()
                    setView(!view)
                }}>{currentRoute}</button>
                {
                    view && (
                        <section className='flex flex-col absolute space-y-3 border-2 rounded-md text-center left-0 w-full'>
                            {
                                routes.map((route) => {
                                    return (<OptionComponent selected={currentRoute === route.link} url={route.url} option={route.link} key={route.link} handleClick={() => {
                                        setCurrentRoute(route.link)
                                        setView(!view)
                                    }} />)
                                })
                            }
                        </section>
                    )
                }
            </section>
        </nav >
    )
}

export default NavbarComponent