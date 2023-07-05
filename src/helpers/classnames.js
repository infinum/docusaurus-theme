/**
 * Filters out falsy items and returns everything joined with a string.
 *
 * @param  {...string} args - Classnames to process.
 *
 * @returns Filtered classnames separated with a space.
 */
export const classnames = (...args) => {
	return args.filter(Boolean).join(' ');
};
