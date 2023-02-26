import { api } from "api/api"
import BodyClient from "components/ClientComponent/BodyClient"

interface props {
    params: {
        name:string
    }
}

export const generateStaticParams = async () => {
    const getRoutes = await api.routes()
    return getRoutes.map((route) => ({
        name: route
    }))
}

const getData = async (query: string) => {
    const res = await api.getClient(query)
    return res;
}



const Clients = async ({ params }: props) => {

    const data = await getData(params.name)
    return (
        <>
            <BodyClient client={data} />
        </>
    )
}

export default Clients