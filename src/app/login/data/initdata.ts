import { user } from "types/user"
import * as Yup from "yup"

export const initValues:user = {
    email: "",
    password: ""
}

export const validationSchema = Yup.object().shape({
    email: Yup.string().required("email is required!"),
    password: Yup.string().required("password is required!"),
})
