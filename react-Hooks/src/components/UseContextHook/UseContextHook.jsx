import React, { createContext, useState } from 'react'
import Component1 from './Component1'

export const AppContaxt = createContext(null);

function UseContextHook() {
  const [user, setUser] = useState('Suman');
  return (
    <AppContaxt.Provider value={{user}}>
    <div className='useContextHook'>
        <h2>UseContext</h2>
        <p>Hello {user}</p>
        <Component1/>
    </div>
    </AppContaxt.Provider>
  )
}

export default UseContextHook