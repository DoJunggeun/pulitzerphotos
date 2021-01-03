import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/photos';
import Link from 'next/link'
import Head from 'next/head'
import SetTheme from '../../components/SetTheme'
import Buttons from '../../components/Buttons'

export default function Post({ postData }) {
	let imgsrc = '/photos/'+postData.id+'.jpg'
	let previousPhotoId = "/photo/"+postData.previous
	let nextPhotoId = '/photo/' + postData.next
	// let previousPhotoId = "/photo/"+(Number(postData.id)-1)
	// let nextPhotoId = '/photo/' + (Number(postData.id) + 1)
	// if (postData.id === '1942') {
	// 	previousPhotoId = "/"
	// }
	// if (postData.id == '1943') {
	// 	nextPhotoId = '/photo/1944_1';
	// }
	// if (postData.id == '1944_1') {
	// 	previousPhotoId = '/photo/1943'
	// 	nextPhotoId = '/photo/1944_2';
	// }
	// if (postData.id == '1944_2') {
	// 	previousPhotoId = '/photo/1944_1'
	// 	nextPhotoId = '/photo/1945';
	// }
	// if (postData.id == '1945') {
	// 	nextPhotoId = '/photo/1947';
	// }
	// if (postData.id == '1947') {
	// 	previousPhotoId = '/photo/1945';
	// }
	// if (postData.id == '1967') {
	// 	nextPhotoId = '/';
	// }
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SetTheme />
			<div className="content">
				<h1 className="photoTitle">{postData.title}</h1>
				<span className="photoAuthor">
					by {postData.author} ({postData.news}, {postData.id})
				</span>
				<img src={imgsrc} alt={postData.title} />
				<Buttons nextPhotoId={nextPhotoId} previousPhotoId={previousPhotoId}/>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}