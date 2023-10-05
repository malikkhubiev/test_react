import React, { createContext, useEffect, useState } from 'react'
import { CompA } from './components/CompA';
import { CompB } from './components/CompB';

export const Context = createContext()

const App = () => {

  let [name, setName] = useState("");

  useEffect(() => {
    let id = setTimeout(() => console.log("started"), 100)
    return () => {
      clearTimeout(id)
    }
  }, [name])

  const nameHandler = (newValue) => {
    setName(() => newValue.target.value)
  };

  return (
    <>
      <input value={name} onChange={nameHandler} />
      <h1>Хэллоу мир</h1>
      <Context.Provider value={name}>
        <CompA/>
        <CompB/>
      </Context.Provider>
    </>
  )
}

export default App;