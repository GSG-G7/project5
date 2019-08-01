const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`listen to http://localhost:${app.get('port')}`);
});
