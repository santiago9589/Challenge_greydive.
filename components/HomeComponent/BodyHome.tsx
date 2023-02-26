"use client"

import { useRouter } from "next/navigation"
import { Root } from "types/api"
import CardClient from "./CardClient"

interface props {
    data: Root[]
}

const BodyHome = ({ data }: props) => {

    const router = useRouter()

    return (
        <>
            <h1>home</h1>
            {
                data.map((client) => {
                    return (
                        <CardClient key={client.cliente} name={client.cliente} handleNavigation={() => router.push(`/clients/${client.cliente}`)} />
                    )
                })
            }
        </>
    )
}

export default BodyHome