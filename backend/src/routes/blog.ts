// blog.ts
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'

type Bindings = {
    DATABASE_URL : string
    JWT_SECRET : string
}

type Blog = {
    title : string;
    content : string;
    authorId : string;
}

type Variables = {
    // Add your variables here
}

const app = new Hono<{
    Bindings: Bindings,
    Variables: Variables
}>();

app.post('/' , async (c) => {

    const prisma =  new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const body : Blog = await c.req.json();

        const response = await prisma.blog.create({
            data : {
                title : body.title,
                content : body.content,
                authorId : body.authorId
            },
        });

        console.log(`Reponse is : ${response}`);

        return c.json({
            message : 'Blog created successfully',
            data : response
        });
    } catch (err) {
        console.error(err);
        return c.json({
            message : 'Error creating blog',
            error : err
        });
    }
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