import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
  return (
    <div>
        <h1>oops!</h1>
        <p>Unexpected error occured</p>
        <p><i>{error.statusText || error.message}</i></p>
    </div>
  )
}

export default Error