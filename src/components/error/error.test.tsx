import { render, screen } from '@testing-library/react'
import ErrorComponent from './error'

// react-scripts test is not working well. Need to implement jest
describe('Error component', () => {
  test('Should run without error', async () => {
    render(<ErrorComponent/>)
    const erTxt = screen.getByText(/Error!/)
    expect(erTxt).toBeTruthy
  })
})