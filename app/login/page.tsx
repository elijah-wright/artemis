'use server';

import Login from './login';

export default async function Page() {
	return (
		<section>
			<h1 className="font-bold text-2xl mb-8 text-center">
				Login
			</h1>
			<Login/>
		</section>
	)
}