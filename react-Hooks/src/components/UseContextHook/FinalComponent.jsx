import React, { useContext } from 'react'
import {AppContaxt} from './UseContextHook'

function FinalComponent() {
    const {user} = useContext(AppContaxt);
  return (
    <div>
        <p>Hello {user}, greeting you again</p>
    </div>
  )
}

export default FinalComponent