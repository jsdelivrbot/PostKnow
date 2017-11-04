export const currentWindowWidth = () => {
	const doc = document;
	const w = window;
	const docEl =
		doc.compatMode && doc.compatMode === 'CSS1Compat'
			? doc.documentElement
			: doc.body;

	let width = docEl.clientWidth;

	if (w.innerWidth && width > w.innerWidth) {
		width = w.innerWidth;
	}

	return width;
};
