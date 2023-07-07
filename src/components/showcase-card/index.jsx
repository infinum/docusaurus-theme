/**
 * A simple card for showcasing something.
 *
 * @param {object} props ImageAndText options.
 * @param {object} props.previous Docusaurus `previous` data.
 * @param {object} props.next Docusaurus `next` data.
 */
export const ShowcaseCard = (props) => {
	const {
		imageUrl,
		imageAlt,
		title,
		description,
		url,
		newTab = false,
	} = props;

	const contents = (
		<>
			<img className='aspect-[3/2] object-cover mb-2 border border-grey-100' src={imageUrl} alt={imageAlt} />

			<h2 className='transition-colors group-hover:text-infinum -mb-2'>{title}</h2>
			<p>{description}</p>
		</>
	);

	let newTabProps = {};

	if (newTab) {
		newTabProps = {
			target: '_blank',
			rel: 'noopener noreferrer',
		};
	}

	if (url) {
		return (
			<a href={url} className='max-w-sm flex flex-col gap-4 group hover:no-underline transition hover:scale-105' {...newTabProps}>
				{contents}
			</a>
		);
	}

	return (
		<div className='max-w-sm flex flex-col'>
			{contents}
		</div>
	);
};
