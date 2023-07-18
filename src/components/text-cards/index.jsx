/**
 * Section with a title and subtitle on the left, and two columns of title with text cards on the right.
 *
 * @param {object} props TextCards options.
 * @param {string} props.title Section title.
 * @param {string} props.subtitle Section subtitle.
 * @param {Object[]} props.cards Cards to display.
 * @param {string} props.cards[].text Card title.
 * @param {string} props.cards[].subtitle Card subtitle.
 */
export const TextCards = (props) => {
	const {
		title,
		subtitle,
		cards,
	} = props;

	return (
		<div className='gap-gutter px-side-padding p-side-padding py-10 desktop:py-24 desktop:grid desktop:grid-cols-12 desktop:auto-rows-auto'>
			<div className='col-start-1 col-span-3 row-start-1 row-span-full mb-10 desktop:mb-0 max-w-xl'>
				<h3 className='text-36 font-bold mb-4 desktop:mb-1'>{title}</h3>
				<p className='text-16'>{subtitle}</p>
			</div>

			<div className='col-start-5 col-span-8 flex flex-col items-start gap-y-10 desktop:grid desktop:grid-cols-fit20 desktop:auto-rows-auto desktop:gap-x-gutter'>
				{cards.map(({ title, subtitle }, i) => {
					return (
						<div key={i}>
							<h4 className='text-24 font-bold mb-1.5'>{title}</h4>
							<p className='text-16'>{subtitle}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
