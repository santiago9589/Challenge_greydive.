import { api } from "api/api"
import BodyClient from "components/ClientComponent/BodyClient"
import ErrorComponent from "components/ErrorComponent/ErrorComponent"

interface props {
    params: {
        name: string
    }
}

export const generateStaticParams = async () => {
    const getRoutes = await api.routes()
    return getRoutes.data.map((route:string) => ({
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
            <BodyClient client={data.data} />
            {
                data.error && (<ErrorComponent error={data.error} />)
            }
        </>
    )
}

export default Clients