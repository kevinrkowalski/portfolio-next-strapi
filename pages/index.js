import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'

import { fetchDb, getExcerpt, prefixSiteUrl } from "../helpers/helpers"
import circleDownChevron from '../public/img/circled-down-chevron.svg'
import kevinImg from '../public/img/Kevin.png'

export default function Home({ projects }) {
  console.log(projects)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Header menuItems={menuItems} /> */}
        <section className="container mx-auto my-8 p-4 border-bottom border-brand-gray">
          <h1 className='font-serif text-6xl mb-4'>
            <span className="font-bold">Hello!</span><br />
            <em>I'm </em>
            <span className="font-bold highlight">Kevin Kowalski</span>
          </h1>
          <p className='font-bold mb-4'>Developer, Marketer, & Technology Enthusiast</p>
          <p className='mb-4'>Hi! I'm a web devleoper with a love of making websites for people and businesses alike. I currently work for a law firm updating and maintaining their website on a daily basis. I love to transform ideas into fully featured websites that make heads turn.</p>
          <p className='mb-4'>Ready to start a project together?</p>
          <Link href="#contact" className='inline-flex gap-4 relative items-center mb-16'>
            <Image src={circleDownChevron} alt="" />
            LET'S TALK
            <div className='w-24 h-px bg-brand-gray'></div>
          </Link>
          <Image src={kevinImg} alt="Kevin Kowalski" />
        </section>
        <section id="work" className="container mx-auto my-8 p-4">
          <h2 className='font-serif text-5xl mb-4'>Previous Work</h2>
          {projects.data.map(project => {
            const { Title, Description, FeaturedImage } = project.attributes
            const { url, width, height, alternativeText } = FeaturedImage.data.attributes.formats.small
            return (
              <div key={project.id}>
                <Image src={prefixSiteUrl(url)} width={width} height={height} alt={alternativeText || Title} />
                <h3 className='font-serif text-4xl mb-4'>{Title}</h3>
                <p>{getExcerpt(Description)}</p>
              </div>
            )
          })}
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const projects = await fetchDb('projects?populate=FeaturedImage')
  return {
    props: {
      projects
    }
  }
}
