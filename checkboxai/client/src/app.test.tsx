import { screen, render } from '@testing-library/preact';
import { App } from './app';

describe('Given I render a the app', () => {
  test('then a hello world is displayed', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
