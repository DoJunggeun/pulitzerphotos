import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/fphotos';
import Link from 'next/link'
import Head from 'next/head'
import SetTheme from '../../components/SetTheme'

export default function Post({ postData }) {
	let imgsrc = '/fphotos/'+postData.id+'.jpg'
	let previousPhotoId = "/fphoto/"+postData.previous
	let nextPhotoId = '/fphoto/' + postData.next
	if (postData.next == '') nextPhotoId = '/photo?#feature' 
	if (postData.previous == '') previousPhotoId = '/photo#feature' 
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