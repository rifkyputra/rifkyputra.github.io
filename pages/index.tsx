import Layout, { siteDescription, siteTitle } from '../components/layout'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import utilStyles from '../styles/utils.module.css'


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
          <a><h2 className={` ${utilStyles.flexItem}`}>01. Experience</h2></a>
        </Link>
        <div className={`${utilStyles.dividerBtm}`}>&nbsp;</div>
        <span className={`${utilStyles.dividerSpan} `}>//</span>
        <Link href={`/portfolio`}>
          <a><h2 className={` ${utilStyles.flexItem}`}>02. Portfolio</h2></a>
        </Link>
        <div className={`${utilStyles.dividerBtm}`}>&nbsp;</div>

        <span className={`${utilStyles.dividerSpan} `}>//</span>
        <Link href={`/blog`}>
          <a><h2 className={`${utilStyles.flexItem}`}>03. Blog</h2></a>
        </Link>
        <div className={`${utilStyles.dividerBtm}`}>&nbsp;</div>

        <span className={`${utilStyles.dividerSpan} `}>//</span>
        <Link href={`/contact`}>
          <a><h2 className={`${utilStyles.flexItem}`}>04. Contact</h2></a>
        </Link>


      </section>

    </Layout>
  )
}


