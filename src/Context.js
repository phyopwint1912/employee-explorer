import React, { useState } from 'react';
const Context = React.createContext();

const Provider = (props) => {
  const [employees, setEmployees] =  useState(new Set())
  const URL = "https://api.additivasia.io/api/v1/assignment/employees";
  return (
    <Context.Provider value={{
      employees,
      setEmployees,
      URL
    }}>
      {props.children}
    </Context.Provider>
  )
}
const Consumer = Context.Consumer
export { Provider, Consumer, Context }

