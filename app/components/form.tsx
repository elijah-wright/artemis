'use client';

import { createPost } from '../actions';

export default async function Form() {
	return (
		<form
			style={{ opacity: 1 }}
			className="relative max-w-[500px] text-sm mx-auto"
			action={(formData) => {
				createPost(formData);
			}}
		>
			<input
				aria-label="Your post"
				placeholder="Your post..."
				name="post"
				type="text"
				required
				className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
			/>
			<button
				className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-7 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
				type="submit"
			>
				Post
			</button>
		</form>
	);
}