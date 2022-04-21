import { render } from '../../test-utils'
import * as React from 'react'
import Spinner from './Spinner'

describe('Spinner Tests', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Spinner
          show
          data-testid="spinner"/>
    )

    const spinner = getByTestId('spinner')

    expect(spinner).toBeInTheDocument()
  })

  it('renders as inline', () => {
    const { getByTestId } = render(
      <Spinner
          show
          inline
          data-testid="spinner"/>
    )

    const spinner = getByTestId('spinner')

    expect(spinner).toBeInTheDocument()
  })
})
