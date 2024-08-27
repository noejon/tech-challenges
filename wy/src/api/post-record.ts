const ENDPOINT = 'https://staging-api1.workyard.com/record';

interface PostRecordParams {
  name: string;
  quantity: number;
}

export async function postRecord({ name, quantity }: PostRecordParams) {
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        name,
        quantity,
      }),
      headers: new Headers({
        'content-type': 'application/json',
      }),
    });
    const result = await response.json();
    console.info(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
