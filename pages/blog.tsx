import { AppProps } from "../node_modules/next/app";
import { getSortedPostsData } from "../lib/posts";


import Layout from '../components/layout';
import Head from "../node_modules/next/head";
import utilStyles from '../styles/utils.module.css';
import Link from "../node_modules/next/link";
import Date from '../components/date';




function Blog({ allPostsData }) {
    return (<Layout home>
        <Head>
        <title>Blog</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        <div className={` ${utilStyles.padding10px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        </div>
      </section>

    </Layout>)
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default Blog;