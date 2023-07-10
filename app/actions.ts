'use server';

import { getClient, id } from '../lib/threads';
import { cookies } from 'next/headers';

export async function createPost(formData: FormData) {
	const text = formData.get('post')?.toString();
	const token = cookies().get('THREADS_TOKEN')!.value;
	const client = getClient(token);
	client.posts.create(text!, id);
}

export async function getToken(formData: FormData) {
	const username = formData.get('username')?.toString();
	const password = formData.get('password')?.toString();
	const client = getClient();
	await client.login(username!, password!);
	return client.token;
}