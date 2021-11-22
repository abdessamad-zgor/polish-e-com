import { useState, useEffect } from 'react';

function useScroll() {
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		document.addEventListener('scroll', () => setScroll(window.scrollY));
		return () => {
			document.removeEventListener('scroll', () => setScroll(0));
		};
	});

	return scroll;
}

export default useScroll;
