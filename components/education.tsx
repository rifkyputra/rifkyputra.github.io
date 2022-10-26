import utilStyles from '../styles/utils.module.css'

export default function Education({ postData }) {
    return (
        <>
            <article>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
    )
}
