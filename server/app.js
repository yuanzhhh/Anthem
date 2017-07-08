const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public', {
  maxage: 3600000
}));

app.use(async function (ctx, next) {
  await next();
  ctx.set('Access-Control-Allow-Origin', '*');
});

// routes
app.use(index.routes(), index.allowedMethods())

module.exports = app