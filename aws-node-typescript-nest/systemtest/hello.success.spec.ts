import * as request from 'supertest';
const url = 'http://localhost:3000/test/hello';

describe('GET / - a simple api endpoint', () => {
  it('Hello API Request', async () => {
    const result = await request(url).get('/');
    expect(result.text).toEqual('Hello World!');
    expect(result.status).toEqual(200);
  });
});
