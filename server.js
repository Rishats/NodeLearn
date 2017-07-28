var koa = require('koa');
var route = require('koa-route'); //require it
var app = koa();
//and we'll set up 2 routes, for our index and about me pages
app.use(route.get('/', index));
app.use(route.get('/about', about));
app.listen(8008);
console.log('Koa listening on port 8008');