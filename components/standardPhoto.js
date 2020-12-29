import Link from 'next/link'
import Head from 'next/head'
import Layout from 'layout'


export default function Photo( { title, author, news, imgsrc, year }) {
  return (
	  <Layout>
	  <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
	  </Head>
		<div className="content">
			<h1>{props.year}</h1>
			<h3>"{props.title}"</h3>by {props.author} ({props.news})
			<img src={imgsrc} alt={year}/>
			<div className="buttons">
				<div className="previous"><Link href="/"><a>previous</a></Link></div>
				<div className="next"><Link href="/"><a>next</a></Link></div>
				<Link href="/"><a className="gohome">Go home</a></Link>
			</div>
		</div>
  	  </Layout>
  )
}
