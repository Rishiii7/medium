import { Hono } from 'hono'
import mainRouter from './routes/index';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('/*', cors({
  origin: '*',
}));

app.options('/*', (c) => {
  return c.text('', 204);
});

app.route('/api/v1', mainRouter);

export default app
