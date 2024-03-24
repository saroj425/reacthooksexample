import React, { createContext } from 'react'
import B from './B'
import C from './C'

const FirstName = createContext()
const LastName = createContext()
const A = () => {
  return (
    <>
        <FirstName.Provider value="Saroj">
          <LastName.Provider value={"Kumar Pandey"}>
                <C/>
          </LastName.Provider>
        </FirstName.Provider>
    </>
  )
}

export default A
export {FirstName,LastName}