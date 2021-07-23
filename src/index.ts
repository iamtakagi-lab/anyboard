import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import requestId from 'koa-requestid'
import serve from 'koa-static'
import { resolve } from 'path'
import env from './common/env'
import router from './routes'
import koaBody from "koa-body"
import koaSend from 'koa-send'

const r = path => resolve(__dirname, path)

const app = new Koa()
const dev = env.NODE_ENV !== 'production'

!dev ? app.use(logger()) : ''
app.use(koaBody())
app.use(requestId())
app.use(helmet())
app.use(cors())

app.use(router.middleware())
app.use(router.routes())
app.use(router.allowedMethods())

app.use(serve(r('../dist')));

app.use(async ctx => {
  if (ctx.status === 404) {
    await koaSend(ctx, "index.html", { root: r('../dist') });
  }
});

app.listen(env.PORT, env.HOST, () => {
  console.info(
      `API server listening on ${env.HOST}:${env.PORT}, in ${env.NODE_ENV}`
  )
})

app.on('error', (err) =>
  console.error(`Unhandled exception occured. message: ${err.message}`)
)