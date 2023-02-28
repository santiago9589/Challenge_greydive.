import { contact } from "types/contact"
import * as Yup from "yup"

export const initValues:contact = {
    name: "",
    lastName: "",
    email: "",
    cellphone: ""
}

export const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    lastName: Yup.string().required("lastname is required!"),
    email: Yup.string().required("email is required!"),
    cellphone: Yup.string().required("cellphone is required!"),
})
