import React, { useState } from 'react';
const Context = React.createContext();

const Provider = (props) => {
  const [employees, setEmployees] =  useState(new Set())
  
  return (
    <Context.Provider value={{
      employees,
      setEmployees
    }}>
      {props.children}
    </Context.Provider>
  )
}
const Consumer = Context.Consumer
export { Provider, Consumer, Context }

