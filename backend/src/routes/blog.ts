// blog.ts
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { verify } from 'hono/jwt'

type Bindings = {
    DATABASE_URL : string
    JWT_SECRET : string
}

type Blog = {
    title : string;
    content : string;
    authorId : string;
}

type UpdateBody = {
    id : string;
    title : string;
    content? : string;
}

type Variables = {
    // Add your variables here
    userId : string
}

const app = new Hono<{
    Bindings: Bindings,
    Variables: Variables
}>();

app.use(async (c, next) => {
    try {
        const jwt : string | undefined = await c.req.header("Authorization");

        

        if( !jwt ) {
            return c.json({
                message : "Unauthorized"
            }, 401);
        }
        
        // verify the token
        // if invalid, return 401
        // console.log(jwt);
        const token = jwt.split(' ')[1];
        // console.log(token);

        const payload = await verify(token, c.env.JWT_SECRET);

        // console.log(`payload returned is : ${typeof payload.userId}`);

        if( !payload ) {
            c.status(401);
            return c.json({
                message : "Unauthorized"
            });
        }

        c.set('userId' , payload.userId as string);
        await next();

    } catch (err ) {
        return c.json({
            message : "Error while authorizing token"
        }, 401);
    }
});

app.post('/' , async (c) => {

    const prisma =  new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const userId = c.get('userId');

        const body : Blog = await c.req.json();

        const response = await prisma.blog.create({
            data : {
                title : body.title,
                content : body.content,
                authorId : userId
            },
            select : {
                id : true,
                author : true
            }
        });

        // console.log(`Reponse is : ${response}`);

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

app.put('/', async (c) => {

    try {
        const userId = c.get('userId');

        const prisma =  new PrismaClient({
            datasourceUrl : c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const body : UpdateBody = await c.req.json();

        const response = await prisma.blog.update({
            where : {
                id : body.id,
                authorId : userId
            }, 
            data : {
                title : body.title,
                content : body?.content
            }
        });

        return c.json({
            message : 'Blog updated successfully',
            data : response
        });
    } catch(err) {
        console.error(err);
        c.status(502);
        return c.json({
            message : 'Error updating blog',
            error : err
        });
    }
    
});

app.get('/bulk', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl : c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const response = await prisma.blog.findMany({});

        return c.json({
            message : 'Blogs fetched successfully',
            data : response
        });
    } catch(err) {
        console.error(err);
        c.status(503);
        return c.json({
            message : 'Error fetching blogs',
            });
    }
});


app.get('/:id', async (c) => {

    try {
        const id : string = c.req.param('id');

        const prisma = new PrismaClient({
            datasourceUrl : c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const response = await prisma.blog.findUnique({
            where : {
                id : id
            }
        });

        if( ! response ) {
            c.status(404);
            return c.json({
                message : 'Blog not found',
            });
        }

        return c.json({
            message : 'Blog fetched successfully',
            data : response
        });
    } catch (err) {
        console.error(err);
        c.status(503);
        return c.json({
            message : 'Error fetching blog',
        });
    }
});



export default app;