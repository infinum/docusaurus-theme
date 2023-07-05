import React from 'react';
import { generalIcons } from '../icons';
import { classnames } from '../../helpers/classnames';

/**
 * Docusaurus footer replacement. The copyright and links are provided through Docusaurus config.
 *
 * @param {object} props FeatureShowcase options.
 * @param {object} props.footer Docusaurus `footer` props.
 */
export const AdmonitionCard = (props) => {
	const {
		type = 'info',
		children,
		title,
	} = props;

	const typeMappings = {
		note: {
			label: 'Note',
			icon: generalIcons.postItNote,
			iconClass: 'text-violet-30',
		},
		tip: {
			label: 'Tip',
			icon: generalIcons.lightbulb,
			iconClass: 'text-sand-30',
		},
		info: {
			label: 'Info',
			icon: generalIcons.info,
			iconClass: 'text-sky-30',
		},
		caution: {
			label: 'Caution',
			icon: generalIcons.warning,
			iconClass: 'text-candy-30',
		},
		danger: {
			label: 'Danger',
			icon: generalIcons.danger,
			iconClass: 'text-candy-30',
		},
		success: {
			label: 'Success',
			icon: generalIcons.checkCircle,
			iconClass: 'text-olive-30',
		},
	};

	if (!type || !Object.keys(typeMappings).includes(type)) {
		return null;
	}

	return (
		<div className={classnames(
			`es-alert es-alert--${type}`,
			'm-0 my-10 pl-10 pr-0 py-4 border-l-4 border-l-infinum',
			type === 'info' && 'border-l-sky-30',
			type === 'tip' && 'border-l-sand-30',
			type === 'note' && 'border-l-violet-30',
			type === 'success' && 'border-l-olive-30',
			type === 'danger' && 'border-l-candy-30',
			type === 'caution' && 'border-l-candy-30',
		)}>
			{title !== ':es-hide-title:' &&
				<i className='flex gap-1.5 items-center font-sans text-12 uppercase not-italic leading-none font-medium mb-2'>
					{typeMappings[type]?.icon &&
						React.cloneElement(typeMappings[type]?.icon, {
							className: classnames('w-6 h-6', typeMappings[type]?.iconClass)
						})
					}

					<span className='text-grey-500'>{title ?? typeMappings[type]?.label}</span>
				</i>
			}

			<div className='font-sans text-16 text-black'>
				{children}
			</div>
		</div>
	);
};
