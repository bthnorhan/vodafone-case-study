import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}

		try {
			const item = window.localStorage.getItem(key);
			return item ?? initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	const setValue = (value: string) => {
		try {
			setStoredValue(value);
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, value);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		value: storedValue,
		setValue,
	};
};
