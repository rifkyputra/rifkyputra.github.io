import Layout from "../components/layout";

import { getAllPostIds, getPostDataFromPath } from '../lib/posts'
import Head from "../node_modules/next/head";

import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export default function Skills({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                hii
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const paths = getAllPostIds()
//     return {
//         paths,
//         fallback: false
//     }
// }

export async function getStaticProps({ params }) {
    const postData = await getPostDataFromPath('mdPages/skills.md')
    return {
        props: {
            postData
        }
    }
}



