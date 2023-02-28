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
            <header className="flex flex-col w-full my-2 space-y-2">
                <h1 className="text-center text-4xl capitalize font-mono">List of Clients</h1>
                <h1 className="text-center text-2xl capitalize font-mono">
                    {data.length} Clients
                </h1>
            </header>
            <section className="flex flex-col space-y-2 gap-2">
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