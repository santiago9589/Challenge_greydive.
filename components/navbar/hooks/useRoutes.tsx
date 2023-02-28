import {useState,Dispatch,SetStateAction} from "react"
import { routes } from "types/routes"

const routesData: routes[] = [
    { url: "/home", link: "Home", selected: false },
    { url: "/contactus", link: "Contact us", selected: false },
    { url: "/whoarewe", link: "Who are we", selected: false }
]

export const useRoutes = ():[routes[],string,Dispatch<SetStateAction<string>>,boolean,Dispatch<SetStateAction<boolean>>] =>{
    const [routes, setRoutes] = useState<routes[]>(routesData)
    const [currentRoute, setCurrentRoute] = useState<string>(routesData[0].link)
    const [view, setView] = useState<boolean>(false)

    return [routes,currentRoute,setCurrentRoute,view,setView]
}