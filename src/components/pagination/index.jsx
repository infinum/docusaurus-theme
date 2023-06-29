/**
 * Replacement for the built-in Docusaurus pagination component.
 *
 * @param {object} props ImageAndText options.
 * @param {object} props.previous Docusaurus `previous` data.
 * @param {object} props.next Docusaurus `next` data.
 */
export const Pagination = (props) => {
	const {
		previous,
		next,
	} = props;

	const prevContent = (
		<>
		<svg className="-scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" height="16" width="17"><path d="M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
		Previous
		</>
	);

	const nextContent = (
		<>
		Next
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" height="16" width="17"><path d="M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
		</>
	);

	return (
		<div className='border-t border-t-grey-200 pt-10 mt-10 pb-28 flex items-center justify-between'>
			{!previous &&
				<div className='flex items-center gap-3 text-16 font-bold text-grey-400 select-none'>{prevContent}</div>
			}

			{previous &&
				<a className='flex items-center gap-3 text-16 font-bold hover:no-underline' href={previous}>{prevContent}</a>
			}

			{!next &&
				<div className='flex items-center gap-3 text-16 font-bold text-grey-400 select-none'>{nextContent}</div>
			}

			{next &&
				<a className='flex items-center gap-3 text-16 font-bold hover:no-underline' href={next}>{nextContent}</a>
			}
		</div>
	);
};
