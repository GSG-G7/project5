
const test = require('tape');
const supertest = require('supertest')
const app =require('../src/app')


test("testing",(t)=>{
    t.equal(5,5,"return 5")
    t.end();
})

test('testing at status code equal 200',(t) => {
    supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err,res) => {
        t.error(err);
        t.end();
    })
})

test('testing at status code equal 404', t => {
    supertest(app)
        .get('/test')
        .expect(404)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, 'clinet error', 'Expected got clinet error' )
            t.end();
        })
})

test('testing at route /search', t => {
    supertest(app)
    .post('/search')
    .expect(200)
    .expect('Content-Type', 'application/json')
    .end((err,res) => {
        t.error(err);
        t.end();
    })

})
