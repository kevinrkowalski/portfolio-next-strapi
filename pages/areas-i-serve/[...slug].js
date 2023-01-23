import { fetchDb, prefixServerUrl } from '../../helpers/helpers'
import Page from '../../layouts/Page'
import SeoHead from '../../components/SeoHead'

import Image from 'next/image'
import CustomMarkdown from '../../components/CustomMarkdown'

const Location = ({ menuItems, location }) => {
  const { title, content } = location.data[0].attributes;
  const { alternativeText, url, width, height } = location.data[0].attributes.featuredImage.data.attributes
  const { metaTitle, metaDescription, metaRobots, structuredData } = location.data[0].attributes.seo[0]

  return (
    <>
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        robots={metaRobots}
      />
      <Page menuItems={menuItems}>
        <article className='container mx-auto px-4 lg:px-32 xl:px-56 article'>
          <h1 className='font-serif font-bold text-5xl md:text-6xl my-8'>{title}</h1>
          <Image src={prefixServerUrl(url)} width={width || 1200} height={height || 1200} alt={alternativeText} />
          <CustomMarkdown className='my-8'>
            {content}
          </CustomMarkdown>
          {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
        </article>
      </Page>
    </>
  )
}

export default Location

export async function getServerSideProps(context) {
  const path = context.query.slug.join('/')
  const menuItems = await fetchDb('menus?filters\[slug\][$eq]=main-nav&populate=*')
  const location = await fetchDb(`locations?filters\[slug\][$eq]=${path}&populate=*`)

  if (!location || location.data.length < 1) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      menuItems,
      location
    }
  }
}