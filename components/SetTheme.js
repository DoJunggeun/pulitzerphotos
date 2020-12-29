import React, { Component, useState, useEffect } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

export default function SetTheme() {
	function followTheme() {

		// 이벤트리스너 + 테마 변경 + 버튼 변경
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			let app = document.getElementsByTagName('body')[0];
			if (event.matches) {
				//dark mode
				app.style.backgroundColor = 'rgb(30,30,30)';
				app.style.color = 'white';
				setIsDarkMode(true);
				return 'dark';
			} else {
				//light mode
				app.style.backgroundColor = 'rgb(245,245,245)';
				app.style.color = 'black';
				setIsDarkMode(false);
				return 'light';
			}
		});
	}

	function toggleTheme(presentTheme) {
		let app = document.getElementsByTagName('body')[0];
		if (presentTheme == 'dark') {
			app.style.backgroundColor = 'rgb(245,245,245)';
			app.style.color = 'black';
			setIsDarkMode(false);
			return 'light';
		} else {
			app.style.backgroundColor = 'rgb(30,30,30)';
			app.style.color = 'white';
			setIsDarkMode(true);
			return 'dark';
		}
	}

	function setDefaultTheme() {
		if (!window.sessionStorage.getItem('isNotFirstConeect')) {
			window.sessionStorage.setItem('isNotFirstConeect', true);
			let app = document.getElementsByTagName('body')[0];
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				app.style.backgroundColor = 'rgb(30,30,30)';
				app.style.color = 'white';
				setIsDarkMode(true);
				return 'dark';
			} else {
				app.style.backgroundColor = 'rgb(245,245,245)';
				app.style.color = 'black';
				setIsDarkMode(false);
				return 'light';
			}
		}
		if (document.getElementsByTagName('body')[0].style.color == 'white') {
			setIsDarkMode(true);
			return 'dark';
		} else {
			setIsDarkMode(false);
			return 'light';
		}
	}

	const [theme, setTheme] = useState();
	const [isDarkMode, setIsDarkMode] = useState();
	useEffect(() => {
		setTheme(setDefaultTheme());
	}, []);
	useEffect(() => {
		followTheme();
	});

	if (isDarkMode === undefined) {
		return <div></div>;s
	} else {
		return (
			<div className="setTheme">
				<DarkModeToggle
					onChange={() => {
						let newTheme = toggleTheme(theme);
						setTheme(newTheme);
					}}
					checked={isDarkMode}
					size={50}
					speed={3}
				/>
			</div>
		);
	}
}