"use client"

import React from 'react'
import { useFormik } from 'formik'
import { initValues, validationSchema } from './data/initdata'
import FormComponent from 'components/FormComponent/Form'
import InputComponent from 'components/FormComponent/Input'
import { contact } from 'types/contact'
import { api } from 'api/api'
import { useLogged } from 'store/store'

const ContactUs = () => {

  const {logged} = useLogged()

  const formik = useFormik<contact>({
    initialValues: initValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      api.postContactUs(values)
      handleReset(values)
    }
  })

  const { handleChange, handleSubmit, handleReset, values, errors, touched } = formik

  return (
    <>
      {
        logged ? (<FormComponent onSubmit={handleSubmit}>
          <InputComponent
            name="name"
            placeholder="name"
            type="text"
            value={values.name}
            errors={errors.name}
            touched={touched.name}
            onChange={handleChange}
          />
          <InputComponent
            name="lastName"
            placeholder="lastname"
            type="text"
            value={values.lastName}
            errors={errors.lastName}
            touched={touched.lastName}
            onChange={handleChange}
          />
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
            name="cellphone"
            placeholder="cellphone"
            type="text"
            value={values.cellphone}
            errors={errors.cellphone}
            touched={touched.cellphone}
            onChange={handleChange}
          />
        </FormComponent>) : (null)
      }
    </>
  )
}

export default ContactUs