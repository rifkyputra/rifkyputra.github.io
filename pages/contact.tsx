import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';


function Contact() {
    return (
        <Layout home>
            <a href="https://www.instagram.com/pirkyruptra/"> Instagram </a>
            <div className={`${utilStyles.padding10px}`}></div>

            <a href="https://twitter.com/rif_ptra"> Twitter </a>
            <div className={`${utilStyles.padding10px}`}></div>
        
            <a href="https://www.linkedin.com/in/rptra/"> LinkedIn </a>

            <div className={`${utilStyles.padding10px}`}></div>

            <a href="/">Email</a>

        </Layout>
    )

}

export default Contact;