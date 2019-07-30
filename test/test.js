const test = require('tape');
const supertest = require('supertest');
const router = require('../src/controllers/index');

test ('check status code is 200',(t) =>{
   
    supertest(router)
      .git('/')
      .expect(200)
      .expect('Content-Type', /html/ )
      .end((err)=>{
          t.error(err);
          t.end();
      })
})

