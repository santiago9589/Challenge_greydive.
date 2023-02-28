import React from 'react'
import { Pregunta, Root } from 'types/api'

interface props {
    ask: Pregunta
}

const AskComponent = ({ ask }: props) => {
    return (
        <section className='flex flex-col bg-white rounded-md p-2 text-black'>
            <p>Tiempo: {ask.tiempo}</p>
            <p>Tipo de tarea: {ask.tipoTarea}</p>
            <p>Respuesta: {ask.respuesta}</p>
            <p>Texto: {ask.texto}</p>
        </section>
    )
}

export default AskComponent

