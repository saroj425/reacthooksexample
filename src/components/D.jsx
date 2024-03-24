import React, { useContext } from 'react'
import {FirstName, LastName}  from './A'

const D = (props) => {
  const firstname = useContext(FirstName);
  const lastname = useContext(LastName)
  return (
    <>
        {/* <div>{props.name}</div> */}
        <h2>{firstname} {lastname}</h2>
    </>
  )
}

export default D