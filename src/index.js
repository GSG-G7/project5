const app = require('./app');

const port = app.get('port');

app.listen(port,()=>{
    console.log(`listen to http://localhost:${port}`)
})