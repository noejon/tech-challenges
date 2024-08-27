import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://API_TO_MOCK/route', function () {
    return HttpResponse.json({
      // Mocked data
    });
  }),
];
