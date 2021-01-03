import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/fphotos';
import Link from 'next/link'
import Head from 'next/head'
import SetTheme from '../../components/SetTheme'
import ImageGallery from 'react-image-gallery';
import Buttons from '../../components/Buttons'

export default function Post({ postData, images }) {
	let previousPhotoId = "/fphoto/"+postData.previous
	let nextPhotoId = '/fphoto/' + postData.next
	if (postData.next == '') nextPhotoId = '/photo?#feature' 
	if (postData.previous == '') previousPhotoId = '/photo#feature' 

	const displayImage = (images.length < 2)
	? <img src={images[0].original} alt={postData.title} />
	: <ImageGallery 
		items={images} 
		showThumbnails={false}
		thumbnailPosition={'bottom'}
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
	const fileNames = fs.readdirSync(path.join(process.cwd(),'public','fphotos',params.id));
	const images = fileNames.map(file => {
		return {
			original: '/fphotos/'+params.id+'/'+file,
			thumbnail: '/fphotos/'+params.id+'/'+file
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