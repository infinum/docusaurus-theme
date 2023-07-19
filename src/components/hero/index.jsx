import { Button } from '../button';
import { classnames } from '../../helpers/classnames';

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
 * @param {boolean} [props.extendImage=false] If passed, the image is extended into the bottom padding. Useful with images that visually end "earlier", but have extra height for the shadow.
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
		extendImage = false,
	} = props;

	return (
		<div
			className={classnames(
				'flex flex-col-reverse desktop:grid desktop:grid-cols-2 gap-gutter p-side-padding pb-20 desktop:pb-side-padding desktop:pt-20 items-center',
				gray && 'bg-grey-100',
				extendImage && 'desktop:pb-0 desktop:gap-y-0 desktop:grid-rows-[auto_9rem]',
				!extendImage && 'desktop:pb-36',
			)}
		>
			<div className='space-y-5'>
				<h1 className='text-h2 font-display font-bold max-w-[15ch]'>{title}</h1>
				<p className='text-16 max-w-sm'>{subtitle}</p>
				<Button label={buttonLabel} url={buttonUrl} />
			</div>

			<img
				className={classnames('w-full mb-5 desktop:mb-0', extendImage && 'desktop:row-span-2')}
				src={imageUrl}
				alt={imageAlt}
			/>
		</div>
	);
};
