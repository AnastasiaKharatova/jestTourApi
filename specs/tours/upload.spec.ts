import * as supertest from "supertest";
const request = supertest("https://practice-react.sdetunicorns.com/api/test");

describe('UPLOAD', () => {
    it('upload single document',async () => {
        await request
        .post('/upload/single')
        .attach('single', 'src/image/tr71123-ai-art.jpe')
        .then(console.log)
        .then(el=>{
            expect(el.body.filename).toBe('tr71123-ai-art.jpe')
        })
    });
});
