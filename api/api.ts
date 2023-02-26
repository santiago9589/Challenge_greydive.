import { Root } from "types/api"
import { data } from "./data"


export const api = {
    list: async (): Promise<Root[]> => {
        const response = await data
        return response
    },
    routes: async (): Promise<string[]> => {
        const response = await data
        const routes = data.reduce((acc: string[], current: Root) => {
            acc.push(current.cliente)
            return acc
        }, [""])

        return routes
    },
    getClient: async (query: string): Promise<Root> => {
        const response = await data.filter((client) => {
            return client.cliente === query
        })
        return response[0]
    }

}