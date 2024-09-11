import { App } from './app';
import { screen, render} from '@testing-library/preact';

describe('Given I render a the app', () => {
  test('then a hello world is displayed', () => {
    render(<App/>);
    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
