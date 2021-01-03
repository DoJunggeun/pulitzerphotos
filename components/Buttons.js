import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Buttons({ previousPhotoId, nextPhotoId }) {
	return (
		<div className="buttons">
			<Link href={previousPhotoId}>
				<div className="next arrow">
					<span>{'⬅'}</span>
				</div>
			</Link>

			<Link href="/photo#photos">
				<div className="next">
					<span>{'📄'}</span>
				</div>
			</Link>

			<Link href="/">
				<div className="next">
					<span>{'🏠'}</span>
				</div>
			</Link>
			<Link href={nextPhotoId}>
				<div className="next arrow">
					<span>{'➡'}</span>
				</div>
			</Link>
		</div>
	);
}