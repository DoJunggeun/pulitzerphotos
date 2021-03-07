import React, { Component, useState, useEffect } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

function setDarkMode() {
	let app = document.getElementsByTagName('body')[0];
	let buttons = document.querySelector('.buttons');
	app.style.backgroundColor = 'rgb(30,30,30)';
	app.style.color = 'white';
	buttons && (buttons.style.backgroundColor = 'rgb(30,30,30)');
	buttons && (buttons.style.color = 'white');
}
function setLightMode() {
	let app = document.getElementsByTagName('body')[0];
	let buttons = document.querySelector('.buttons');
	app.style.backgroundColor = 'white';
	app.style.color = 'black';
	buttons && (buttons.style.backgroundColor = 'white');
	buttons && (buttons.style.color = 'black');
}

export default function SetTheme() {
	function followTheme() {
		// 이벤트리스너 + 테마 변경 + 버튼 변경
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			let app = document.getElementsByTagName('body')[0];
			let buttons = document.querySelector('.buttons');
			if (event.matches) {
				//dark mode
				setDarkMode();
				setIsDarkMode(true);
				return 'dark';
			} else {
				//light mode
				setLightMode();
				setIsDarkMode(false);
				return 'light';
			}
		});
	}

	function toggleTheme(presentTheme) {
		if (presentTheme == 'dark') {
			setLightMode();
			setIsDarkMode(false);
			return 'light';
		} else {
			setDarkMode();
			setIsDarkMode(true);
			return 'dark';
		}
	}

	function setDefaultTheme() {
		if (!window.sessionStorage.getItem('isNotFirstConeect')) {
			window.sessionStorage.setItem('isNotFirstConeect', true);
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				setDarkMode();
				setIsDarkMode(true);
				return 'dark';
			} else {
				setLightMode();
				setIsDarkMode(false);
				return 'light';
			}
		}

		let buttons = document.querySelector('.buttons');

		if (document.getElementsByTagName('body')[0].style.color == 'white') {
			buttons && (buttons.style.backgroundColor = 'rgb(30,30,30)');
			buttons && (buttons.style.color = 'white');
			setIsDarkMode(true);
			return 'dark';
		} else {
			setIsDarkMode(false);
			buttons && (buttons.style.backgroundColor = 'white');
			buttons && (buttons.style.color = 'black');
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
		return <div></div>;
		s;
	} else {
		return (
			<div className="setTheme">
				<div style={{ position: 'absolute', right: '5px' }}>
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
			</div>
		);
	}
}