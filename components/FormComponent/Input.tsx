import React from 'react'

interface props {
    name: string
    errors: string | undefined
    placeholder: string
    type: string
    value: string 
    touched: boolean | undefined
    onChange: (e: React.ChangeEvent<any>)=>void
}

const InputComponent = ({ name, errors, touched, ...props }: props) => {
    return (
        <section className='flex flex-col space-y-2'>
            <label  className='text-3xl capitalize mt-2' htmlFor={name}>{name}</label>
            <input
                name={name}
                {...props}
                className="rounded-lg p-2 placeholder-gray-300 placeholder:text-lg text-black"
            />
            {errors && touched && <div className='text-red-400 font-bold text-2xl capitalize  rounded-lg p-2'>{errors}</div>}
        </section>
    )
}

export default InputComponent