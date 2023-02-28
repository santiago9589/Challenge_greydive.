import axios from "axios"
import { Root } from "types/api"
import { contact } from "types/contact"
import { loginLogout, response, responseGetClients, responseRoutes } from "types/reponse"
import { user } from "types/user"
import { data } from "./data"


export const api = {
    list: async (): Promise<response> => {
        const response: response = { data: [], error: "" }
        try {
            const responseAsync = await data
            response.data = responseAsync
            return response
        } catch (error) {
            response.error = "Upps ha ocurrido un error"
            return response
        }
    },
    routes: async (): Promise<responseRoutes> => {

        const responseRoutes: responseRoutes = { data: [], error: "" }

        try {
            const response = await data
            const routes = response.reduce((acc: string[], current: Root) => {
                acc.push(current.cliente)
                return acc
            }, [""])

            responseRoutes.data = routes
            return responseRoutes

        } catch (error) {

            responseRoutes.error = "Upps ha ocurrido un error"
            return responseRoutes
        }
    },
    getClient: async (query: string): Promise<responseGetClients> => {

        const responseGetClients: responseGetClients = { data: {}, error: "" }

        try {

            const response = await data.filter((client) => {
                return client.cliente === query
            })

            responseGetClients.data = response[0]

            return responseGetClients

        } catch (error) {
            responseGetClients.error = "Upps ha ocurrido un error"
            return responseGetClients
        }
    },
    postContactUs: async (contact: contact): Promise<string> => {
        return ` ${contact.name} We will contact you as soon as possible`
    },
    login: async (user: user): Promise<loginLogout> => {
        return {
            message: ` ${user.email} Welcome to our page`,
            state: true
        }
    },
    logout: async (): Promise<loginLogout> => {
        return {
            message: `I hope see you soon, good bye`,
            state: false
        }
    }

}