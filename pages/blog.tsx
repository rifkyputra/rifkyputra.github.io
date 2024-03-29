import { getSortedPostsData } from "../lib/posts";


import Layout from '../components/layout';
import Head from "../node_modules/next/head";
import utilStyles from '../styles/utils.module.css';
import Link from "../node_modules/next/link";
import Date from '../components/date';


const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';


function Blog({ allPostsData }) {
  return (<Layout home={false}>
    <Head>
      <title>Blog</title>
    </Head>

    <section className={`${utilStyles.headingMdLeft} ${utilStyles.padding1px}`}>
      {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
      <div className={` ${utilStyles.padding10px}`}>
        
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href="https://listed.to/@rifkyputra" > 
                <a>Listed.to</a>
              </Link>
              <br />
            </li>
        </ul>
      </div>
      <div className={` ${utilStyles.padding10px}`}>
        
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={prefix + `/posts/${id}`}>
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