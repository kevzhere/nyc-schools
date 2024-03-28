import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./hooks/useSchoolData', () => ({
  useSchoolData: () => ({
    data: [{dbn: 'abc', school_name: 'name'}]
  })
}))
jest.mock('./hooks/useSatData', () => ({
  useSatData: () => ({
    data: [{dbn: 'abc'}]
  })
}))

test('renders without issue', async () => {
  render(<App />);
  const headerValue = screen.getByText('Schools')
  expect(headerValue).toBeTruthy()
});
