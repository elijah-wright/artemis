'use client';

import { getToken } from '../actions';
import { setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export default async function Form() {
	return (
		<form
			style={{ opacity: 1 }}
			className="relative max-w-[500px] text-sm mx-auto"
			action={async (formData) => {
				const token = await getToken(formData);
				setCookie('THREADS_TOKEN', token);
				redirect('/');
			}}
		>
			<input
				aria-label="Username"
				placeholder="Username"
				name="username"
				type="text"
				required
				className="pl-4 pr-32 py-2 mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
			/>
			<input
				aria-label="Password"
				placeholder="Password"
				name="password"
				type="password"
				required
				className="pl-4 pr-32 py-2 mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
			/>
			<button
				className="mx-auto w-full flex items-center justify-center absolute px-2 py-1 font-medium h-7 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded"
				type="submit"
			>
				Log in
			</button>
		</form>
	);
}