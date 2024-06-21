// blog.ts
import { Hono } from 'hono'

const app = new Hono()

app.post('/' , (c) => {
    return c.json({
        message : "FROM blog POST"
    });
});

app.put('/', (c) => {
    return c.json({
        message: "FROM blog PUT"
    });
});

app.get('/:id', (c) => {
    const id = c.req.param('id');
    return c.json({
        message: `FROM blog GET ${id}`  
    });
});

app.get('/bulk', (c) => {
    return c.json({
        message : `got all the blogs`
    });
});

export default app;