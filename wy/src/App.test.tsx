import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given I render the App', () => {
  test('then I should see the text hello world', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
