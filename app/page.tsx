import { Client } from '@threadsjs/threads.js';
import { Thread } from './components/thread';

export async function client() {
	const client = new Client({ token: process.env.THREADS_TOKEN! });
	return client;
}

export default async function Page() {
	const localClient = await client();

	const feed = await Promise.resolve(
		localClient.feeds.fetch()
	);

	const posts = feed.items.map((item: any) => item.thread_items).flatMap((itemArray: any[]) => itemArray.map((item) => item.post));

	return (
		<section>
			{posts.map((post: any, index: any) => (
				<Thread id={post.pk} text={post.caption?.text} author={post.user} media={post.image_versions2 ?? null} created_at={Number(String(post.taken_at) + '000')}
					public_metrics={{'direct_reply_count': post.text_post_app_info.direct_reply_count, 'like_count': post.like_count}}/>
			))}
		</section>
	)
}