import Head from 'next/head'
import Layout, { siteDescription, siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{siteDescription}</p>
      </section>
      <section className={`${utilStyles.flexContainer}`}>
        <Link href={`/experience`}>
          <h2 className={` ${utilStyles.flexItem}`}><a>01. Experience</a></h2>
        </Link>
        <span className={`${utilStyles.dividerSpan} ${utilStyles.flexItem}`}>//</span>
        <Link href={`/portfolio`}>
          <a><h2 className={` ${utilStyles.flexItem}`}>02. Portfolio</h2></a>
        </Link>
        <span className={`${utilStyles.dividerSpan} ${utilStyles.flexItem}`}>//</span>
        <Link href={`/blog`}>
          <a><h2 className={`${utilStyles.flexItem}`}>03. Blog</h2></a>
        </Link>
        <span className={`${utilStyles.dividerSpan} ${utilStyles.flexItem}`}>//</span>
        <Link href={`/contact`}>
          <a><h2 className={`${utilStyles.flexItem}`}>04. Contact</h2></a>
        </Link>


      </section>
      
    </Layout>
  )
}


