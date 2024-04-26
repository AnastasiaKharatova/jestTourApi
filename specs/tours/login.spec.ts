import* as supertest from "supertest";
const request = supertest("localhost:8001/api/v1");
import {user} from "../../data/user"

describe('USER SINGNUP AND LOGIN', () => {
    describe('POSITIVE', () => {
        it('login user', async() => {
            //request for signup
           const res = await request 
           .post('/user/signup')
           .send(user)
           .expect(201); 
           console.log(res.body, '==========');
           console.log(res.header['content-type'],'res============')



           // request for login
           const resLogin = await request.post('/users/login')
           .send({
            email:user.email,
            password:user.password
        })
           .expect(200)
           console.log(resLogin.body,'resLogin==========')


        });
    });
    describe('NEGATIVE', () => {
        it('', () => {
            
        });
    });
});

