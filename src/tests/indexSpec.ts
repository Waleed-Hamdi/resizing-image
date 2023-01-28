import supertest from 'supertest';
import app from '../index';



const request = supertest(app);

describe('Test endpoint and function existsSync', () => {
  it('test app endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  })
});
