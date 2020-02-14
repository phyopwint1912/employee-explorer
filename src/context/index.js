import React, { useState } from 'react';
const Context = React.createContext();

const Provider = (props) => {
  const [search, setSearch] = useState('')
  const [directSubs, setDirectSubs] = useState([])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Context.Provider value={{
      search,
      handleSearchChange,
      directSubs,
      setDirectSubs
    }}>
      {props.children}
    </Context.Provider>
  )
}
const Consumer = Context.Consumer
export { Provider, Consumer, Context }


