import Layout, { siteDescription, siteTitle } from '../components/layout'
import Head from '../node_modules/next/head'
import Link from '../node_modules/next/link'
import utilStyles from '../styles/utils.module.css'
import { getPostDataFromPath } from '../lib/posts'

import Skills from './skills'
import Experience from './experience'
import Projects from './projects'
import Education from './projects'



export default function Home({ skills, exp, proj, edu }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{siteDescription}</p>
      </section>
      <section className={`${utilStyles.flexContainer}`}>
        <Link href={`https://github.com/rifkyputra`}>
          <a><h2 className={` ${utilStyles.flexMenuItem}`}>Github</h2></a>
        </Link>
        <div className={`${utilStyles.dividerBtm}`}>&nbsp;</div>
        <span className={`${utilStyles.dividerSpan} `}>//</span>
        <Link href={`https://gitlab.com/rifkyputra`}>
          <a><h2 className={` ${utilStyles.flexMenuItem}`}>Gitlab</h2></a>
        </Link>
        <div className={`${utilStyles.dividerBtm}`}>&nbsp;</div>

        <span className={`${utilStyles.dividerSpan} `}>//</span>
        <Link href={`https://www.linkedin.com/in/rptra/`}>
          <a><h2 className={`${utilStyles.flexMenuItem}`}>LinkedIn</h2></a>
        </Link>
        <div className={`${utilStyles.dividerBtm}`}>&nbsp;</div>


        <span className={`${utilStyles.dividerSpan} `}>//</span>
        <Link href={`/blog`}>
          <a><h2 className={`${utilStyles.flexMenuItem}`}>Blog</h2></a>
        </Link>
        <div className={`${utilStyles.dividerBtm}`}>&nbsp;</div>

        <span className={`${utilStyles.dividerSpan} `}>//</span>
        <Link href={`https://twitter.com/rif_ptra`}>
          <a><h2 className={`${utilStyles.flexMenuItem}`}>Twitter</h2></a>
        </Link>



      </section>

      <section className={`${utilStyles.wrapMargin}`}>
        <Experience postData={exp}></Experience>
      </section>

      <section className={`${utilStyles.wrapMargin}`}>
        <Skills postData={skills}></Skills>
      </section>

      <section className={`${utilStyles.wrapMargin}`}>
        <Projects postData={proj}></Projects>
      </section>

      <section className={`${utilStyles.wrapMargin}`}>
        <Education postData={edu}></Education>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const skills = await getPostDataFromPath('mdPages/skills.md')
  const exp = await getPostDataFromPath('mdPages/experience.md')
  const proj = await getPostDataFromPath('mdPages/projects.md')
  const edu = await getPostDataFromPath('mdPages/education.md')
  return {
    props: {
      skills,
      exp,
      proj,
      edu,
    }
  }
}


