"use client"

import React from 'react'
import OptionComponent from './optionsComponent'
import image from "../../public/360_F_344119928_RswQ1dC3oORVpjHA3bzrDyMq9wvGAQ9S.jpg"
import Image from 'next/image'
import { useRoutes } from './hooks/useRoutes'
import { useLogged } from 'store/store'
import { useRouter } from 'next/navigation'
import { api } from 'api/api'


const NavbarComponent = () => {

    const [routes, currentRoute, setCurrentRoute, view, setView] = useRoutes()
    const { logged, setLogged, setError } = useLogged()
    const route = useRouter()

    const handleLogout = async () => {
        try {
            const response = await api.logout()
            setLogged(response.state)
            route.push("/")
        } catch (error: any) {
            setError(error.message)
        }
    }


    return (
        <>
            {logged ? (
                <nav className='flex justify-around border-2 shadow-sm rounded-lg p-2  w-full h-12 items-center' >
                    <section>
                        <Image src={image} height="35" alt='logo' />
                    </section>
                    <section className='w-32 text-center relative  p-1 rounded-lg bg-white text-black' onClick={(e) => {
                        e.preventDefault()
                        setView(!view)
                    }}>
                        <p>{currentRoute}</p>
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
                    <button className='bg-white rounded-lg p-1 w-32 text-black'
                        onClick={() => handleLogout()}
                    >Logout</button>
                </nav >
            ) : (null)}
        </>


    )
}

export default NavbarComponent