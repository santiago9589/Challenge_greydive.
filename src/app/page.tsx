"use client"

import React from 'react'
import { useFormik } from 'formik'
import { initValues, validationSchema } from './data/initdata'
import { api } from 'api/api'
import { user } from 'types/user'
import { useLogged } from 'store/store'
import { useRouter } from 'next/navigation'
import FormComponent from 'components/FormComponent/Form'
import InputComponent from 'components/FormComponent/Input'


const Login = () => {

  const { setError, setLogged } = useLogged()
  const router = useRouter()


  const formik = useFormik<user>({
    initialValues: initValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await api.login(values)
        setLogged(response.state)
        router.push("/home")
      } catch (error: any) {
        setError(error.message)
      }
      handleReset(values)
    }
  })

  const { handleChange, handleSubmit, handleReset, values, errors, touched } = formik

  return (
    <FormComponent onSubmit={handleSubmit}>
      <InputComponent
        name="email"
        placeholder="example@example.com"
        type="text"
        value={values.email}
        errors={errors.email}
        touched={touched.email}
        onChange={handleChange}
      />
      <InputComponent
        name="password"
        placeholder="password"
        type="text"
        value={values.password}
        errors={errors.password}
        touched={touched.password}
        onChange={handleChange}
      />
    </FormComponent>
  )
}

export default Login