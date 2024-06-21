import {Hono} from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';


type Variables = {
    prisma: string
}

const app = new Hono<{ 
    Bindings : {
        DATABASE_URL : string
    };
    Variables : Variables 
 }>();

 app.use('/*',  async (c, next) =>{

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    console.log(`Return type of prisma is : ${typeof prisma}`);
    await next();
 })


app.post('/signup' , (c) => {
    console.log(c.env.DATABASE_URL)
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
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