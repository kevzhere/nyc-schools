import { render, screen } from '@testing-library/react'
import School from './school'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      school_name: 'Tottenville'
    }
  }),
  useNavigate: () => ({
    navigate: () => jest.fn()
  })
}))

describe('School page', () => {
  test('Should run without error', async () => {
    render(<School/>)
    const name = screen.getByText('Tottenville')
    expect(name).toBeTruthy()
  })
})