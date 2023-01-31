import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import 'jest-canvas-mock'

import { MyCounter } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
    const myCounter = screen.getByTestId('my-counter')
    // const myCounter = document.querySelector('h1')
    expect(myCounter).toBeInTheDocument()
  })
})
