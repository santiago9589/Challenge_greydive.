import React from 'react'

interface props{
    name:string
    handleNavigation : ()=>void
  }

const CardClient = ({name,handleNavigation}:props) => {
  return (
    <article onClick={()=>handleNavigation()}>
      {name}
    </article>
  )
}

export default CardClient