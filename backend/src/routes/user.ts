import {Hono} from 'hono'

const app = new Hono();


app.post('/signup' , (c) => {
    return c.json({
        message: "Welcome to singup page"
    });

});

app.post('/signin' , (c) => {
    return c.json({
        message: "Welcome to signin page"
    });
})

export default app;