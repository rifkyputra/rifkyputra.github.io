
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from '../node_modules/next/head';
import Link from '../node_modules/next/link';
import Image from '../node_modules/next/image';


const name = 'Rifky Adni Putra'
export const siteTitle = 'Software Developer'
export const siteDescription = "My name is Rifky Adni Putra. I'm a Software Engineer, specialized in Flutter, Unity, DotNet and Unreal Engine. You can find more about me in this page";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Layout({ children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={prefix+`/favicon.ico`} />
        <meta
          name="description"
          content="My name is Rifky Adni Putra. I'm a Software Engineer, specialized in Flutter, Unity, DotNet and Unreal Engine."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={prefix +`/images/profile.jpg`}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={prefix +`/images/profile.jpg`}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
