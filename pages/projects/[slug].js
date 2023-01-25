import { fetchDb, prefixServerUrl } from '../../helpers/helpers'
import Page from '../../layouts/Page'
import SeoHead from '../../components/SeoHead'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

const Project = ({ menuItems, project }) => {
  const { Title, Description, SliderImages } = project.data[0].attributes;
  const { metaTitle, metaDescription, metaRobots } = project.data[0].attributes.seo[0]

  return (
    <>
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        robots={metaRobots}
      />
      <Page menuItems={menuItems}>
        <article className='container mx-auto'>
          <h1 className='font-serif text-6xl font-bold highlight inline'>{Title}</h1>
          <p className='my-8'>{Description}</p>
          <Carousel showThumbs={false} className="mb-8">
            {SliderImages.data.map(image => {
              const { alternativeText, height, width, url } = image.attributes;
              const imgSrc = prefixServerUrl(url)
              return <Image key={image.id} src={imgSrc} width={width} height={height} alt={alternativeText || Title} />
            })}
          </Carousel>
        </article>
      </Page>
    </>
  )
}

export default Project

export async function getStaticProps(context) {
  const [menuItems, project] = await Promise.all([
    fetchDb('menus?filters\[slug\][$eq]=main-nav&populate=*'),
    fetchDb(`projects?filters\[slug\][$eq]=${context.params.slug}&populate=*`)
  ])

  if (!project || !project.data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      menuItems,
      project
    }
  }
}

export async function getStaticPaths() {
  const projects = await fetchDb(`projects?fields[0]=slug`)
  const paths = projects.data.map((project) => ({ params: { slug: project.attributes.slug } }))
  return { paths: paths, fallback: false }
}