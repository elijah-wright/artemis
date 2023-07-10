'use server';

import { Thread } from './components/thread';
import Form from './components/form';
import { getClient } from '../lib/threads';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
	const token = cookies().get('THREADS_TOKEN');
	if (token === undefined) {
		redirect('/login')
	}
	const client = getClient(token!.value);
	const feed = await Promise.resolve(
		client.feeds.fetch()
	);

	const posts = feed.items.map((item: any) => item.thread_items).flatMap((itemArray: any[]) => itemArray.map((item) => item.post));

	return (
		<section>
			<Form />
			{posts.map((post: any, index: any) => (
				<Thread id={post.pk} text={post.caption?.text} author={post.user} media={post.image_versions2 ?? null} created_at={Number(String(post.taken_at) + '000')}
					public_metrics={{'direct_reply_count': post.text_post_app_info.direct_reply_count, 'like_count': post.like_count}}/>
			))}
		</section>
	)
}