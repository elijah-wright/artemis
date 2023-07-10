'use server';

import { client, id } from '../lib/threads';

export async function createPost(formData: FormData) {
	const text = formData.get('post')?.toString();
	client.posts.create(text!, id);
}