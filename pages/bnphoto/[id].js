import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/bnphotos';
import Link from 'next/link'
import Head from 'next/head'
import SetTheme from '../../components/SetTheme'
import ImageGallery from 'react-image-gallery';
import Buttons from '../../components/Buttons'

export default function Post({ postData, images }) {
	let previousPhotoId = "/bnphoto/"+postData.previous
	let nextPhotoId = '/bnphoto/' + postData.next
	if (postData.next == '') nextPhotoId = '/photo?#breakingnews' 
	if (postData.previous == '') previousPhotoId = '/photo#breakingnews' 
	
	const displayImage = (images.length == 1)
	? <img src={images[0].original} alt={postData.title} className={'displayImage'}/>
	: <ImageGallery 
		items={images} 
		showThumbnails={false}
		thumbnailPosition={'bottom'}
		className={'displayImage'}
	/>

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
				{displayImage}
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

import fs from 'fs'
import path from 'path'

export async function getStaticProps({ params }) {
	const fileNames = fs.readdirSync(path.join(process.cwd(),'public','bnphotos',params.id));
	const images = fileNames.map(file => {
		return {
			original: '/bnphotos/'+params.id+'/'+file,
			thumbnail: '/bnphotos/'+params.id+'/'+file
		}
	})
	
	const postData = getPostData(params.id);
	
	return {
		props: {
			postData,
			images,
		},
	};
}