import z from 'zod';

export const singupInput = z.object({
    username : z.string().email(),
    password : z.string(),
    name : z.string().optional()
});

export const siginInput = z.object({
    username : z.string().email(),
    password : z.string()
});


export const createPostInput = z.object({
    title : z.string(),
    content : z.string(),
});


export const updatePostInput = z.object({
    title : z.string(),
    content : z.string().optional(),
});


export type SingupType = z.infer<typeof singupInput>;

export type SigninType = z.infer<typeof siginInput>;

export type CreatePostType = z.infer<typeof createPostInput>;

export type UpdatePostType = z.infer<typeof updatePostInput>;