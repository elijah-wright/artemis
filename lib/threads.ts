import { Client } from '@threadsjs/threads.js';

export const getClient = (token?: string) => new Client({ token });
export const id = process.env.THREADS_ID!