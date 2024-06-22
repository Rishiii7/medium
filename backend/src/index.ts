import { Hono } from 'hono'
import mainRouter from './routes/index';
import { cors } from 'hono/cors';

const app = new Hono();

app.use(cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1', mainRouter);

export default app
