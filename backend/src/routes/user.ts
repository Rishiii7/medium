import {Hono} from 'hono'
import { PrismaClient, } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';

import { SigninType, SingupType } from '@cursedcoder07/common-app';

type Variables = {
    prisma: string
}

const app = new Hono<{ 
    Bindings : {
        DATABASE_URL : string
        JWT_SECRET : string
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
        const body: SingupType  = await c.req.json();
        const response = await prisma.user.create({
            data : {
                username : body.username,
                password : body.password,
                name : body?.name
            }, 
        });

        // console.log(`Response after singup is : ${JSON.stringify(response)}`);

        // use jwt to sign uderid
        const payload = {
            userId : response.id,
        }
        const token : string = await sign(payload, c.env.JWT_SECRET);
        // console.log(`Token generated is : ${token}`);

        return c.json({
            message : 'User created successfully',
            data : response,
            token : token
        }, 200);

    } catch (error) {
        return c.json({
            message : `error while signup!! User Already Exists`,
            error : error
        }, 409);
    }

});

app.post('/signin' , async (c) => {
    // console.log(c.env.DATABASE_URL)
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const body : SigninType = await c.req.json();

        console.log(body);

        // const {success} = SigninType.safeParse(body);
        // console.log( `Success : ${success}`);
        // if (!success) {
        //     c.status(400);
        //     return c.json({
        //         message : 'Invalid Inputs',
        //     });
        // }

        const user = await prisma.user.findFirst({
            where : {
                username : body.username,
                password : body.password
            }, select : {
                id : true,
                username : true,
                name : true
            }
        });

        if( !user ) {
            c.status(403);
            return c.json({
                message : 'No user found?'
            });
        }

        // sign with jwt
        const payload = {
            userId : user.id,
        }
        const token: string = await sign(payload, c.env.JWT_SECRET);
        console.log(`Token generated is : ${token}`);
        
        return c.json({
            message : 'User signed in successfully',
            data : user,
            token : token
        });

    } catch (err) {
        c.status(401);
        return c.json({
            message : 'Invalid Credentials',
            error : err
        });
    }
});

export default app;