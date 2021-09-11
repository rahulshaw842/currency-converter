import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Convert');
  expect(linkElement).toBeInTheDocument();
});

test('should show amount field', () => {
  render(<App />);
  const linkElement = screen.getByLabelText('Amount');
  expect(linkElement).toBeInTheDocument();
})
