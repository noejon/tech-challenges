import { render } from 'preact';
import { App } from './app.tsx';

const app = document.getElementById('app');

if (app) {
  render(<App />, app);
}
