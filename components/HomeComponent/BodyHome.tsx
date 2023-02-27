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
            <section className="flex flex-col space-y-2">
                {
                    data.map((client) => {
                        return (
                            <CardClient video={client.linkVideo} key={client.cliente} name={client.cliente} handleNavigation={() => router.push(`/clients/${client.cliente}`)} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default BodyHome