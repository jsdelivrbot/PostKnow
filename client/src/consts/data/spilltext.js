import {
	THEME_AQUA,
	THEME_WAVE,
	THEME_OCEAN,
	THEME_SEAFOAM
} from '../colorScheme';

export default [
	{
		title: 'Arrests',
		description:
			'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softw',
		url: '/img/icon_front/handcuff.svg',
		bgColor: `${THEME_AQUA}`,
		textColor: `${THEME_SEAFOAM}`,
		skew: {
			inner: '0deg,-10deg',
			outer: '0deg,10deg'
		}
	},
	{
		title: 'Locations',
		description:
			'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing soft',
		url: '/img/icon_front/road.svg',
		bgColor: `${THEME_OCEAN}`,
		textColor: `${THEME_SEAFOAM}`,
		skew: {
			inner: '0deg,10deg',
			outer: '0deg,-10deg'
		}
	},
	{
		title: 'Outcomes',
		description:
			'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing sof',
		url: '/img/icon_front/crime.svg',
		bgColor: `${THEME_SEAFOAM}`,
		skew: {
			inner: '0deg,10deg',
			outer: '0deg,-10deg'
		}
	}
];
