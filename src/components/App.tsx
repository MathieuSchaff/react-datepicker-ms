import React, { useState } from 'react'
import { format } from 'date-fns'
type Props = {
  value?: number
}
const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((prev) => prev - 1)
  }

  console.log('MyCounter', format(new Date(), 'yyyy'))

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div data-testid='my-counter'>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
