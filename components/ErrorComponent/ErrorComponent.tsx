import React from 'react'

interface props {
    error: string
}

const ErrorComponent = ({ error }: props) => {
    return (
        <>
            <h1>Se encontro un error</h1>
            <h2>{error}</h2>
        </>
    )
}

export default ErrorComponent