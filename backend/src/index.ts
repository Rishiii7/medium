import { Hono } from 'hono'
import user from './routes/user'
import books from './routes/blog'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/user', user)
app.route('/blog', books)

export default app
