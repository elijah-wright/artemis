import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Artemis',
	description: 'A Threads client',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={clsx('text-black bg-white dark:text-white dark:bg-gray-900')}>
			 <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					{children}
				</main>
			</body>
		</html>
	)
}
