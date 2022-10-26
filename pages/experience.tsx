import Layout from "../components/layout";

import { getPostDataFromPath } from '../lib/posts'
import Head from "../node_modules/next/head";

import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export default function Skills({ postData }) {
    return (
        <>
            <article>
                <h2 className={utilStyles.headingXl}>{postData.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
    )
}

