import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given I render the App', () => {
  test('then I should see the name input', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
  });

  test('then I should see the quantity input', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('quantity')).toBeInTheDocument();
  });

  test('then I should see the save button', () => {
    render(<App />);
    expect(screen.getByRole('button', {name: "Save"}))
  })
});
