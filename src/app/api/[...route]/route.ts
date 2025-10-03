import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import appPetstore from '@/api/petstore/generated';

const app = new Hono();

// 生成されたものに basePath が指定されないのでここで `/api/petstore` に紐づけ
app.route('/api/petstore', appPetstore);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
