import { Button } from '../button';

/**
 * Hero section with title, subtitle, button, and image on the right.
 *
 * @param {object} props Hero options.
 * @param {string} props.title Section title.
 * @param {string} props.subtitle Section subtitle.
 * @param {string} props.buttonLabel Button label.
 * @param {string} props.buttonUrl Button URL.
 * @param {string} props.imageUrl Image URL.
 * @param {string} props.imageAlt Image alt text.
 * @param {boolean} [props.gray=false] If passed, the block is set on a light gray background.
 */
export const Hero = (props) => {
	const {
		title,
		subtitle,
		buttonLabel,
		buttonUrl,
		imageUrl,
		imageAlt,
		gray = false,
	} = props;

	return (
		<div className={`desktop:grid desktop:grid-cols-2 gap-gutter p-side-padding desktop:pt-20 desktop:pb-36 ${gray ? 'bg-grey-100' : ''}`}>
			<div className='space-y-5 mb-10 desktop:mb-0'>
				<h1 className='text-h2 font-display font-bold'>{title}</h1>
				<p className='text-16 max-w-sm'>{subtitle}</p>
				<Button label={buttonLabel} url={buttonUrl} />
			</div>
			<img src={imageUrl} alt={imageAlt} />
		</div>
	);
};
