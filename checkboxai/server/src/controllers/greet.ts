import { Request, Response } from 'express';

export function greetController(req: Request, response: Response) {
  response.status(200).json({ message: 'Hello World!' });
}
