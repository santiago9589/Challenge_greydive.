import { Root } from "./api";

export interface response{
    data:Root[] | any
    error:string
}

export interface responseRoutes{
    data:string[] | any
    error:string
}

export interface responseGetClients{
    data:Root | any
    error:string
}