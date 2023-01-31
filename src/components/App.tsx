import React from 'react'
import { format } from 'date-fns'

const MyCounter = () => {
  return (
    <div data-testid='my-counter'>
      <p>{format(new Date(), 'yyyy-MM-dd')}</p>
      <p>test</p>
    </div>
  )
}

export default MyCounter
