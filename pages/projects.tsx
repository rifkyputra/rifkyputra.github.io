
import utilStyles from '../styles/utils.module.css'

export default function Projects({ postData }) {
    return (
        <article>
            <h2 className={utilStyles.headingXl}>{postData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    )
}





