import { formatDistanceToNowStrict } from 'date-fns';
import Image from 'next/image';

// @TODO: not this
function formatDistanceToNow(distance: any) {
	return formatDistanceToNowStrict(distance)
		.replace(' seconds', 's')
		.replace(' second', 's')
		.replace(' minutes', 'm')
		.replace(' minute', 'm')
		.replace(' hours', 'h')
		.replace(' hour', 'h')
		.replace(' days', 'd')
		.replace(' day', 'd')
		.replace(' months', 'm')
		.replace(' month', 'm')
		.replace(' years', 'y')
		.replace(' year', 'y')
}

interface ThreadProps {
	id: any;
	text: any;
	author: any;
	media: any;
	created_at: any;
	public_metrics: any;
}

// from https://github.com/leerob/leerob.io/blob/main/app/components/tweet.tsx
export const Thread: React.FC<ThreadProps> = ({
	id,
	text,
	author,
	media,
	created_at,
	public_metrics
}) => {
	const authorUrl = '/@' + author.username;
	const threadUrl = '/post/' + id;
	const createdAt = new Date(created_at);

	let formattedText;
	if (text) {
		formattedText = text
			.replace('&amp;', '&');
	}

	return (
		<div className="rounded-lg border border-neutral-200 dark:border-neutral-800 px-6 py-4 my-2 bg-white dark:bg-neutral-900 max-w-xl mx-auto">
			<div className="flex items-center">
				<a
					className="flex h-9 w-9"
					href={authorUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						alt={author.username}
						height={36}
						width={36}
						sizes="33vw"
						src={author.profile_pic_url}
						className="rounded-full"
						quality={100}
					/>
				</a>
				<a
					href={authorUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="author flex flex-col ml-4 !no-underline"
				>
					<span
						className="flex items-center font-semibold !text-neutral-900 dark:!text-neutral-100 leading-5 tracking-tight"
						title={author.name}
					>
						{author.full_name}
						{author.is_verified ? (
							<svg
								aria-label="Verified Account"
								className="ml-1 text-blue-500 dark:text-white inline h-4 w-4"
								viewBox="0 0 44 44"
							>
								<g fill="currentColor">
									<path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" />
								</g>
							</svg>
						) : null}
					</span>
					<span
						className="text-sm !text-neutral-500 dark:!text-neutral-400 leading-4"
						title={`@${author.username}`}
					>
						@{author.username}
					</span>
				</a>
				<a
					className="!text-neutral-500 dark:!text-neutral-400 text-sm !hover:underline ml-auto"
					href={threadUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
				<time
					title={`${createdAt.toUTCString()}`}
					dateTime={createdAt.toISOString()}
				>
					{formatDistanceToNow(createdAt)}
				</time>
			</a>
			</div>
			{text ? (
				<div className="mt-4 mb-1 leading-normal whitespace-pre-wrap	!text-neutral-700 dark:!text-neutral-200">
					{formattedText}
				</div>
			) : null}
			{media && media.candidates.length > 0 ? (
				<div
					className={
						'inline-grid grid-cols-1 gap-x-2 gap-y-2 my-2'
					}
				>
					<Image
						alt={text}
						height={media.candidates[0].height}
						width={media.candidates[0].width}
						src={media.candidates[0].url}
						className="rounded"
					/>
				</div>
			) : null}
			
			<div className="flex text-sm mt-2">
				<a
					className="flex items-center mr-4 !text-neutral-500 dark:!text-neutral-400 hover:!text-blue-600 transition !hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg className="mr-2" width="18" height="18" viewBox="0 0 24 24">
						<path
							className="fill-current"
							d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
							fill="none"
							stroke="currentColor"
						/>
					</svg>
					<span>
						{new Number(public_metrics.direct_reply_count).toLocaleString('en', {
							notation: 'compact',
						})}
					</span>
				</a>
				<a
					className="flex items-center !text-neutral-500 dark:!text-neutral-400 hover:!text-red-600 transition !hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg className="mr-2" width="18" height="18" viewBox="0 0 24 24">
						<path
							className="fill-current"
							d="M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z"
							fill="none"
							stroke="currentColor"
						/>
					</svg>
					<span>
						{new Number(public_metrics.like_count).toLocaleString('en', {
							notation: 'compact',
						})}
					</span>
				</a>
			</div>
		</div>
	);
}