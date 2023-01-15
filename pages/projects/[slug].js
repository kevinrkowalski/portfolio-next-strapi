import { fetchDb, prefixSiteUrl } from '../../helpers/helpers'
import Header from '../../components/Header'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

const Project = ({ menuItems, project }) => {
  const { Title, Description, SliderImages } = project.data[0].attributes;

  return (
    <>
      <Header menuItems={menuItems} />
      <article className='container mx-auto'>
        <h1 className='font-serif text-6xl mb-4 font-bold highlight inline'>{Title}</h1>
        <p>{Description}</p>
        <Carousel showThumbs={false}>
          {SliderImages.data.map(image => {
            console.log(image)
            const { alternativeText, height, width, url } = image.attributes;
            const imgSrc = prefixSiteUrl(url)
            console.log(imgSrc)
            return <Image key={image.id} src={imgSrc} width={width} height={height} alt={alternativeText || Title} />
          })}
        </Carousel>
      </article>
    </>
  )
}

export default Project

export async function getServerSideProps(context) {
  const menuItems = await fetchDb('menus?filters\[slug\][eq]=main-nav&populate=*')
  console.log(menuItems)
  const project = await fetchDb(`projects?filters\[slug\][$eq]=${context.query.slug}&populate=SliderImages`)

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