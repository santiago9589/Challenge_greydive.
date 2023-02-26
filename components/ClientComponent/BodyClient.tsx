import React from 'react'
import { Root } from 'types/api'

interface props{
  client:Root
}

const BodyClient = ({client}:props) => {

  console.log(client)

  return (
    <div>BodyClient</div>
  )
}

export default BodyClient