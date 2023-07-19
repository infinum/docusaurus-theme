import React from 'react';
import { Button } from '../button';

/**
 * Call to action cards with icon, text, and button on each card.
 *
 * @param {object} props CtaCards options.
 * @param {string} props.title Section title.
 * @param {string} props.subtitle Section subtitle.
 * @param {Object[]} props.cards Cards to display.
 * @param {React.Component} props.cards[].icon Card icon (refer to the Icon component).
 * @param {string} props.cards[].text Card title.
 * @param {string} props.cards[].buttonLabel Card button label.
 * @param {string} props.cards[].buttonUrl Card button URL.
 */
export const CtaCards = (props) => {
	const {
		title,
		subtitle,
		cards,
	} = props;

	return (
		<div className=' gap-gutter px-side-padding p-side-padding py-10 desktop:pt-24 desktop:pb-36 desktop:grid desktop:grid-cols-12 desktop:auto-rows-auto'>
			<div className='col-start-1 col-span-3 row-start-1 row-span-full mb-10 desktop:mb-0 max-w-xl'>
				<h3 className='text-36 font-bold mb-4 desktop:mb-1'>{title}</h3>
				<p className='text-16'>{subtitle}</p>
			</div>

			<div className='col-start-5 col-span-8 flex flex-col items-start gap-y-20 desktop:grid desktop:grid-cols-fit20 desktop:auto-rows-auto desktop:gap-x-gutter'>
				{cards.map(({ icon, text, buttonLabel, buttonUrl }, i) => {
					return (
						<div key={i}>
							<div className='w-20 h-20 bg-infinum text-white rounded-full flex items-center justify-center mb-5'>{React.cloneElement(icon, {className: 'w-20 h-20'})}</div>
							<h4 className='text-h3 font-bold font-display mb-10 max-w-prose-mini'>{text}</h4>
							{buttonLabel && buttonUrl &&
								<Button label={buttonLabel} url={buttonUrl} />
							}
						</div>
					);
				})}
			</div>
		</div>
	);
};
