import * as supertest from "supertest"
import {getUser} from "../data/user"

const request = supertest("localhost:8001/api/v1")

describe('REVIEW', () => {
    let cookie:
    let userImport = getUser();
    let tourImport = tour();

    it('create review for tour',async () => {
       await request
       .post("/user/signup")
       .send(userImport) 
       .then((response) => {
        expect(response.statusCode).toBe(201);
        console.log(response, "user sign up");

       })
       await request
       .post("/tour")
       .set("Cookie", cookie)
       .send(tourImport)
       .then(res => {
        console.log(res.body.data, "===============")
        expect(res.statusCode).toBe(201)
       })
    });
});