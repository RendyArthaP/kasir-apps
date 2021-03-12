import React from 'react'
import { Alert } from 'react-bootstrap'

const Error = ({errorContent}) => {
  return (
    <div>
      <Alert variant={"danger"}>
        {errorContent}
      </Alert>
    </div>
  )
}

export default Error

