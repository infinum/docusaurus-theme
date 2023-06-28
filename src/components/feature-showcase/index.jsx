/**
 * Single feature showcase, with title and text on the left, and an image on the right.
 *
 * @param {object} props FeatureShowcase options.
 * @param {string} props.title Section title.
 * @param {string} props.text Section body text.
 * @param {string} props.imageUrl Image URL.
 * @param {string} props.imageAlt Image alt text.
 * @param {boolean} [props.gray=false] If passed, the block is set on a light gray background.
 */
export const FeatureShowcase = (props) => {
	const {
		title,
		text,
		imageUrl,
		imageAlt,
		gray = false,
	} = props;

	return (
		<div className={`${gray ? 'bg-grey-100' : ''} desktop:grid desktop:grid-cols-12 gap-gutter px-side-padding p-side-padding desktop:py-20`}>
			<div className='col-start-9 col-span-4 mb-10 desktop:mb-0 max-w-lg desktop:max-w-full row-start-1'>
				<h1 className='text-h3 font-bold font-display mb-5'>{title}</h1>
				<span className='text-18'>{text}</span>
			</div>

			<img className='col-start-1 col-span-6 row-start-1' src={imageUrl} alt={imageAlt} />
		</div>
	);
};
