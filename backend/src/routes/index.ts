import { Hono } from "hono";
import user from './user';
import blog from './blog';

const app = new Hono();

app.route('/user', user);
app.route('/blog', blog);

export default app;