import utilStyles from '../styles/utils.module.css'

export default function Skills({ postData }) {
    return (
        <>
            <article>
                <h2 className={utilStyles.headingXl}>{postData.title}</h2>
                {/* <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div> */}
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
    )
}



