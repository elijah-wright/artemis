import { Client } from '@threadsjs/threads.js';

export const client = new Client({ token: process.env.THREADS_TOKEN! });
export const id = process.env.THREADS_ID!