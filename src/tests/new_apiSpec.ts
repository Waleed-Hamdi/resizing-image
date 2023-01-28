
import supertest from "supertest";
import new_api from '../../Router/api/new_api';


const request = supertest(new_api);

describe('test endpoint',()=>{
   it('test new_api endpoint',async()=>{
    const response = await request.get('/api/image/?name=2&hieght=300&width=500');
    expect(response.status).toBe(200);
   })
});

