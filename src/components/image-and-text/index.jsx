import { classnames } from '../../helpers/classnames';

/**
 * Section with an image on the left, title and variable content on the right.
 *
 * @param {object} props ImageAndText options.
 * @param {string} props.title Section title.
 * @param {string} props.imageUrl Image URL.
 * @param {string} props.imageAlt Image alt text.
 * @param {boolean} [props.gray=false] If passed, the block is set on a light gray background.
 */
export const ImageAndText = (props) => {
	const {
		title,
		imageUrl,
		imageAlt,
		children,
		gray = false,
	} = props;

	return (
		<div className={classnames(
			'desktop:grid desktop:grid-cols-12 gap-gutter px-side-padding p-side-padding pt-0 desktop:pb-36 items-center',
			gray && 'bg-grey-100'
		)}>
			<img className='col-start-1 col-span-5 w-full' src={imageUrl} alt={imageAlt} />

			<div className='col-start-7 col-span-6 max-w-lg desktop:max-w-xl'>
				<h1 className='text-h3 font-bold font-display mb-5'>{title}</h1>
				<span className='text-18'>
					{children}
				</span>
			</div>
		</div>
	);
};
