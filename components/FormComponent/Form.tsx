import React from 'react'

interface props {
    children: React.ReactNode
    onSubmit: () => void
}

const FormComponent = ({ children, onSubmit }: props) => {
    return (
        <form className="p-2 w-full xl:w-2/3 xl:mx-auto " onSubmit={onSubmit}>
            {children}
            <button type='submit' className='bg-green-400 w-full rounded-lg p-4 mt-16 text-2xl'>Submit</button>
        </form>
    )
}

export default FormComponent