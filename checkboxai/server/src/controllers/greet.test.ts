import { Request, Response } from 'express';
import { greetController } from './greet';

describe('Given I call the greetController', () => {
  const request: Request = {} as unknown as Request;
  const response = {
    status: vi.fn(),
    json: vi.fn(),
  };

  beforeEach(() => {
    vi.resetAllMocks();
    response.status.mockReturnValue(response);
    greetController(request, response as unknown as Response);
  });

  test('then 200 status is returned', () => {
    expect(response.status).toHaveBeenCalledWith(200);
  });
  test('then the hello world message is sent', () => {
    expect(response.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Hello World!' }),
    );
  });
});
