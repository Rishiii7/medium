import {Hono} from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';


type Variables = {
    prisma: string
}

type User = {
    username : string;
    password : string;
    name? :  string;
}

const app = new Hono<{ 
    Bindings : {
        DATABASE_URL : string
    };
    Variables : Variables 
 }>();

//  app.use('/*',  async (c, next) =>{

//     const prisma : PrismaClient = new PrismaClient({
//         datasourceUrl : c.env.DATABASE_URL
//     }).$extends(withAccelerate());

//     console.log(`Return type of prisma is : ${typeof prisma}`);
//     await next();
//  })


app.post('/signup' ,async  (c) => {
    console.log(c.env.DATABASE_URL)
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
   
    try {
        const user : User = await c.req.json();
        const response = await prisma.user.create({
            data : {
                username : user.username,
                password : user.password,
                name : user.name
            }, 
        });

        console.log(`Response after singup is : ${JSON.stringify(response)}`);

        return c.json({
            message : 'User created successfully',
            data : response
        }, 200);

    } catch (error) {
        return c.json({
            message : error
        }, 400);
    }

});

app.post('/signin' , (c) => {
    return c.json({
        message: "Welcome to signin page"
    });
})

export default app;