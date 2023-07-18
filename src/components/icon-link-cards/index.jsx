import React from 'react';
import { classnames } from '../../helpers/classnames';

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
 * @param {boolean} [props.osProjectIcons=false] If passed, the icon spacing is slightly tweaked to match open-source project icons.
 */
export const IconLinkCards = (props) => {
	const {
		title,
		cards,
		gray = false,
		osProjectIcons = false,
	} = props;

	return (
		<div className={classnames('px-side-padding py-10 desktop:py-24', gray && 'bg-grey-100')}>
			<h3 className='text-h3 font-bold font-display mb-4 desktop:mb-20'>{title}</h3>

			<div className='-mx-side-padding px-side-padding tablet:mx-0 tablet:px-0 max-tablet:no-scrollbar grid grid-rows-2 auto-cols-auto grid-flow-col tablet:grid-flow-row overflow-x-auto tablet:overflow-x-hidden gap-10 desktop:gap-y-20 tablet:grid-cols-2 desktop:grid-cols-4 tablet:auto-rows-auto tablet:gap-x-20 desktop:gap-x-gutter'>
				{cards.map(({ icon, text, url }, i) => {
					return (
						<a className='hover:no-underline hover:text-infinum w-64 desktop:w-auto' href={url} key={i}>
							{React.cloneElement(icon, { className: classnames('text-infinum', osProjectIcons ? 'w-20 h-20 -mx-2' : 'w-24 h-24 -mx-5') })}
							<h4 className='text-24 font-bold'>{text}</h4>
						</a>
					);
				})}
			</div>
		</div>
	);
};
