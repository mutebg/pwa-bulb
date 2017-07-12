export const writeStore = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const readStore = key => JSON.parse(localStorage.getItem(key));
