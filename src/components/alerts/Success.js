import React from 'react'
import { Alert } from 'react-bootstrap'

const Success = ({successContent}) => {
  return (
    <div>
      <Alert variant={"success"}>
        {successContent}
      </Alert>
    </div>
  )
}

export default Success
