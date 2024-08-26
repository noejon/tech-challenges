import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

const server = setupServer([...handlers]);

beforeAll(function () {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(function () {
  cleanup();
  server.resetHandlers();
});

afterAll(function () {
  server.close();
});
