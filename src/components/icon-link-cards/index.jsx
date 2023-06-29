import React from 'react';

/**
 * Section with a title and cards (with an icon and text).
 *
 * @param {object} props IconLinkCards options.
 * @param {string} props.title Section title.
 * @param {Object[]} props.cards Cards to display.
 * @param {React.Component} props.cards[].icon Card icon (refer to the Icon component).
 * @param {string} props.cards[].text Card title.
 * @param {string} props.cards[].url Card URL.
 * @param {boolean} [props.gray=false] If passed, the block is set on a light gray background.
 */
export const IconLinkCards = (props) => {
	const {
		title,
		cards,
		gray = false,
	} = props;

	return (
		<div className={`px-side-padding py-10 desktop:py-24 ${gray ? 'bg-grey-100' : ''}`}>
			<h3 className='text-h3 font-bold font-display mb-4 desktop:mb-20'>{title}</h3>

			<div className='flex flex-col items-start gap-y-10 desktop:gap-y-20 desktop:grid desktop:grid-cols-4 desktop:auto-rows-auto desktop:gap-x-gutter'>
				{cards.map(({ icon, text, url }, i) => {
					return (
						<a className='hover:no-underline hover:text-infinum' href={url} key={i}>
							{React.cloneElement(icon, {className: 'w-24 h-24 -mx-5 text-infinum'})}
							<h4 className='text-24 font-bold'>{text}</h4>
						</a>
					);
				})}
			</div>
		</div>
	);
};
