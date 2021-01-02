import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/bnphotos';
import Link from 'next/link'
import Head from 'next/head'
import SetTheme from '../../components/SetTheme'
import ImageGallery from 'react-image-gallery';

export default function Post({  }) {
	let postData = 	{
		id : '1974',
		author : 'Anthony K. Roberts',
		news:'freelance photographer',
		title: 'Fatal Hollywood Drama',
		previous: '1973',
		next: '1975',
	}
	let previousPhotoId = "/bnphoto/"+postData.previous
	let nextPhotoId = '/bnphoto/' + postData.next
	if (postData.next == '') nextPhotoId = '/photo?#breakingnews' 
	if (postData.previous == '') previousPhotoId = '/photo#breakingnews' 
	
	
	const images = [
	  {
		original: '/bnphotos/1974/1974.jpg/',
		thumbnail: '/bnphotos/1974/1974.jpg/',
	  },
	  {
		original: '/bnphotos/1974/1974(2).jpg/',
		thumbnail: '/bnphotos/1974/1974(2).jpg/',
	  },
	  {
		original: '/bnphotos/1974/1974(3).jpg/',
		thumbnail: '/bnphotos/1974/1974(3).jpg/',
	  },
	  {
		original: '/bnphotos/1974/1974(4).jpg/',
		thumbnail: '/bnphotos/1974/1974(4).jpg/',
	  },
	];

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
				<ImageGallery 
					items={images} 
					showThumbnails={false}
					thumbnailPosition={'bottom'}
				/>
				<div className="buttons">
					<div className="previous">
						<Link href={previousPhotoId}>
							<a className="gohome">previous</a>
						</Link>
					</div>
					<div className="next">
						<Link href={nextPhotoId}>
							<a>next</a>
						</Link>
					</div>
					<Link href="/photo">
						<a className="gohome">View full list</a>
					</Link>
					<br />
					<Link href="/">
						<a className="gohome">Go home</a>
					</Link>
				</div>
			</div>
		</Layout>
			
	);
}

// export async function getStaticPaths() {
// 	const paths = getAllPostIds();
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// export async function getStaticProps({ params }) {
// 	const postData = getPostData(params.id);
// 	return {
// 		props: {
// 			postData,
// 		},
// 	};
// }