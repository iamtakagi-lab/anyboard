import Router from 'koa-router'

import list from '../posts/list'
import get from '../posts/get'
import search from '../posts/search'
import create from '../posts/create'

const router = new Router({prefix: '/api'})
  .get('/posts', list)
  .get('/posts/:id', get)
  .get('/posts/search', search)
  .post('/posts/create', create)

export default router
