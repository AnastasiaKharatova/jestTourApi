import * as supertest from "supertest";

const request = supertest('https://jsonplaceholder.typicode.com')

describe('COMMONTS', () => {
    it('get request', async () => {
       const res = await request.get("/comments") 
       console.log(res);
       expect(res.statusCode).toEqual(200);
    });
});