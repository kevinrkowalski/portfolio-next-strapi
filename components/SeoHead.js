import Head from 'next/head'
import { useRouter } from 'next/router'

const SeoHead = ({ title, description, canonical, robots }) => {
  const shortTitle = " | Kevin Kowalski"
  const longTitle = " | Kevin Kowalski - Web Developer"
  const siteTitle = (title + longTitle).length > 60 ? shortTitle : longTitle
  const router = useRouter()

  return (
    <Head>
      <title>{title + siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots || 'index, follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical || `https://kevinkowalski.dev${router.asPath}`} />
    </Head>
  )
}

export default SeoHead