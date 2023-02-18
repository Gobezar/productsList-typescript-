import React from 'react'

interface ErrorMessage{
    error: string;
}

export const Error = ({error} : ErrorMessage) => {
  return (
    <div>
        <h3 style={{textAlign:'center', color:'red'}}>{error}</h3>
    </div>
  )
}


