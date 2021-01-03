import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import React, { Component, Button, useState, useEffect } from 'react';
import SetTheme from '../../components/SetTheme.js';
import { photos } from '../../lib/photos.js';
import { fphotos } from '../../lib/fphotos.js';
import { bnphotos } from '../../lib/bnphotos.js';

export default function Photos() {
	let listStyle = {marginBotton: '20px', fontSize: '1.1rem', textDecoration: 'none'}
	let photolist1 = photos.map((photo) => (
		<p style={listStyle} key={photo[0]}>
			<Link href={'/photo/' + photo[0]}>{photo[0].slice(0,4) + ' ' + photo[4]}</Link>
		</p>
	));
	let fphotolist = fphotos.map((photo) => (
		<p style={listStyle} key={photo[0]}>
			<Link href={'/fphoto/' + photo[0]}>{photo[0].slice(0,4) + ' ' + photo[3]}</Link>
		</p>
	));;
	let bnphotolist = bnphotos.map((photo) => (
		<p style={listStyle} key={photo[0]}>
			<Link href={'/bnphoto/' + photo[0]}>{photo[0].slice(0,4) + ' ' + photo[3]}</Link>
		</p>
	));;

	return (
		<>
			<SetTheme />
			<div className="container">
				<Head>
					<title>Pulitzer Prize for Photography</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			<div className="homeButton">
				<Link href="/">Go Home</Link>
			</div>
					<h1 className="title">Pulitzer Prize Photos</h1>
					<div className="photolist" id="photos">
						<h3>for Photography (1942-1967)</h3>
						{photolist1}
					</div>
					<div className="photolist" id="feature">
						<h3>for Feature Photography (1968-present)</h3>
						{fphotolist}
					</div>
					<div className="photolist" id="breakingnews">
						<h3>for Spot News Photography (1968-1999) {'&'}<br/>Breaking News Photography (2000-present)</h3>
						{bnphotolist}
					</div>

				<style jsx>{`
					.container {
						min-height: 100vh;
						padding: 3rem 0.5rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					main {
						padding: 5rem 0;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					.photolist {
						width: 100%;
						align-items: left;
						margin: 10px;
					}
					.homeButton {
						position: absolute;
						left: 15px;
						top: 15px;
						font-size: 1.5rem;
					}
					footer {
						width: 100%;
						height: 100px;
						border-top: 1px solid #eaeaea;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					footer img {
						margin-left: 0.5rem;
					}

					footer a {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					a {
						color: inherit;
						text-decoration: none;
					}

					.title a {
						color: #0070f3;
						text-decoration: none;
					}

					.title a:hover,
					.title a:focus,
					.title a:active {
						text-decoration: underline;
					}

					.title {
						margin: 0;
						margin-top: 12px;
						margin-bottom: 12px;
						line-height: 1.2;
						font-size: 2rem;
					}

					.title,
					.description {
						text-align: center;
					}

					.description {
						line-height: 1.2;
						font-size: 1.2rem;
					}

					code {
						background: #fafafa;
						border-radius: 5px;
						padding: 0.75rem;
						font-size: 1.1rem;
						font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
							Bitstream Vera Sans Mono, Courier New, monospace;
					}

					.grid {
						display: flex;
						align-items: center;
						justify-content: center;
						flex-wrap: wrap;

						max-width: 800px;
						margin-top: 3rem;
					}

					.card {
						margin: 1rem;
						flex-basis: 45%;
						padding: 1.5rem;
						text-align: left;
						color: inherit;
						text-decoration: none;
						border: 1px solid #eaeaea;
						border-radius: 10px;
						transition: color 0.15s ease, border-color 0.15s ease;
					}

					.card:hover,
					.card:focus,
					.card:active {
						color: #0070f3;
						border-color: #0070f3;
					}

					.card h3 {
						margin: 0 0 1rem 0;
						font-size: 1.5rem;
					}

					.card p {
						margin: 0;
						font-size: 1.25rem;
						line-height: 1.5;
					}

					.logo {
						height: 1em;
					}

					@media (max-width: 600px) {
						.grid {
							width: 100%;
							flex-direction: column;
						}
					}
				`}</style>

				<style jsx global>{`
					* {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		</>
	);
}