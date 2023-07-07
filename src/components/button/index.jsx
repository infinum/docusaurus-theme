/**
 * Simple button.
 *
 * @param {object} props Button options.
 * @param {string} props.label Button label.
 * @param {string} props.url Button URL.
 * @param {boolean} [props.external] Is the link external?
 * @param {boolean} [props.anchor] Is the button an anchor link?
 */
export const Button = (props) => {
	const {
		label,
		url,
		external = url?.startsWith('http'),
		anchor = url?.startsWith('#'),
	} = props;

	let extraProps = {};

	if (external) {
		extraProps = {
			rel: 'noopener noreferrer',
			target: '_blank',
		};
	}

	const classes = 'group isolate overflow-hidden relative bg-infinum text-white hover:text-white px-7.5 py-3.75 rounded-full inline-flex items-center gap-3 cursor-pointer text-16 font-bold before:bg-black before:absolute before:inset-0 before:-z-10 before:translate-y-full-plus-px hover:before:translate-y-0 focus:before:translate-y-0 before:transition-transform before:duration-300 hover:decoration-transparent focus:outline-offset-4 focus:outline-infinum';

	if (anchor) {
		const handleScroll = () => {
			const target = document.querySelector(url);

			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
			}
		};

		return (
			<button className={classes} onClick={handleScroll}>
				<span className='group-hover:translate-x-3 group-focus:translate-x-3 transition duration-500'>{label}</span>

				<svg className='group-hover:opacity-0 group-hover:translate-x-3 group-hover:scale-75 group-focus:opacity-0 group-focus:translate-x-3 group-focus:scale-75 origin-right transition duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" height="16" width="17"><path d="M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
			</button>
		);
	}

	return (
		<a className={classes} href={url} {...extraProps}>
			<span className='group-hover:translate-x-3 group-focus:translate-x-3 transition duration-500'>{label}</span>

			<svg className='group-hover:opacity-0 group-hover:translate-x-3 group-hover:scale-75 group-focus:opacity-0 group-focus:translate-x-3 group-focus:scale-75 origin-right transition duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none" height="16" width="17"><path d="M.5 8h14M9.234 2.725l5.978 5.979m-5.978 4.57 5.978-5.978" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
		</a>
	);
};
