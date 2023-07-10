import { Button } from '../button';

/**
 * Call to action section with an image, title, and button.
 *
 * @param {object} props CtaImageButton options.
 * @param {string} props.title Section title.
 * @param {string} props.buttonLabel Button label.
 * @param {string} props.buttonUrl Button URL.
 * @param {string} props.imageUrl Image URL.
 * @param {string} props.imageAlt Image alt text.
 * @param {boolean} [props.gray=false] If passed, the block is set on a light gray background.
 */
export const CtaImageButton = (props) => {
	const {
		title,
		buttonLabel,
		buttonUrl,
		imageUrl,
		imageAlt,
		gray = false,
	} = props;

	return (
		<div className={`px-side-padding desktop:pr-0 py-10 desktop:py-20 desktop:grid desktop:grid-cols-2 desktop:items-center gap-gutter border-t border-t-grey-200 ${gray ? 'bg-grey-100' : ''}`}>
			<div className='mb-10 desktop:mb-0 text-center desktop:text-left flex flex-col items-center desktop:block max-w-xl'>
				<h3 className='text-h3 font-bold font-display mb-4 desktop:mb-10'>{title}</h3>
				<Button label={buttonLabel} url={buttonUrl} />
			</div>

			<img className='w-full' src={imageUrl} alt={imageAlt} />
		</div>
	);
};
