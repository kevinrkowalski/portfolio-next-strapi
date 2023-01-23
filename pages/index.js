import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Page from '../layouts/Page'
import { fetchDb, getExcerpt, prefixServerUrl } from "../helpers/helpers"
import circleDownChevron from '../public/img/circled-down-chevron.svg'
import githubIcon from '../public/img/github.svg'
import emailIcon from '../public/img/email.svg'
import phoneIcon from '../public/img/phone.svg'
import kevinImg from '../public/img/Kevin.png'

export default function Home({ menuItems, projects, homePageContent }) {
  const skills = homePageContent.data.attributes.Skills.data

  return (
    <>
      <Head>
        <title>Kevin Kowalski | Web Developer & Designer</title>
        <meta name="description" content="Kevin Kowalski is a web designer and developer for hire. Check out some of my latest work or reach out and start a project!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page menuItems={menuItems}>
        <section className="container mx-auto my-16 md:my-32 lg:my-56 p-4 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className='font-serif text-6xl mb-4'>
              <span className="font-bold">Hello!</span><br />
              <em>I'm </em>
              <span className="font-bold highlight">Kevin Kowalski</span>
            </h1>
            <p className='font-bold mb-4'>Developer, Marketer, & Technology Enthusiast</p>
            <p className='mb-4'>Hi! I'm a web devleoper with a love of making websites for people and businesses alike. I currently work for a law firm updating and maintaining their website on a daily basis. I love to transform ideas into fully featured websites that make heads turn.</p>
            <p className='mb-4'>Ready to start a project together?</p>
            <Link href="/#contact" className='inline-flex gap-4 relative items-center mb-16'>
              <Image src={circleDownChevron} alt="" />
              LET'S TALK
              <div className='w-24 h-px bg-brand-gray'></div>
            </Link>
          </div>
          <div className='md:ml-auto'>
            <div className='
              relative
              lg:before:block lg:before:absolute lg:before:bg-project-pattern lg:before:bg-no-repeat lg:before:bg-contain lg:before:w-40 lg:before:h-40 lg:before:top-8 lg:before:-left-20
              lg:after:block lg:after:absolute lg:after:bg-project-pattern lg:after:bg-no-repeat lg:after:bg-contain lg:after:w-40 lg:after:h-40 lg:after:bottom-8 lg:after:-right-20 after:z-10
            '>
              <Image src={kevinImg} alt="Kevin Kowalski" className='relative z-10' />
            </div>
          </div>
        </section>
        <hr />
        <section id="work" className="container mx-auto my-16 p-4">
          <span className='mb-4 block'>MY PORTFOLIO</span>
          <h2 className='font-serif text-5xl mb-16 lg:mb-32'>Previous Work</h2>
          {projects.data.map((project, index) => {
            const { Title, Description, FeaturedImage, slug } = project.attributes
            const { url, width, height, alternativeText } = FeaturedImage.data.attributes.formats.small
            const reverseClasses = index % 2 !== 0 ? 'group reverse' : ''
            return (
              <div key={project.id} className={`mb-32 last:mb-0 grid md:grid-cols-2 gap-8 lg:gap-32 items-center ${reverseClasses}`}>
                <div className='
                  relative 
                  lg:before:block lg:before:absolute lg:before:bg-neutral-100 lg:before:w-5/12 lg:before:h-[125%] lg:before:-top-8 lg:before:-left-20 lg:before:z-10 lg:before:group-[.reverse]:left-unset lg:before:group-[.reverse]:-right-20
                  lg:after:block lg:after:absolute lg:after:bg-project-pattern lg:after:w-2/12 lg:after:h-2/3 lg:after:-bottom-40 lg:after:-left-32 lg:after:bg-no-repeat lg:after:bg-contain lg:after:group-[.reverse]:left-unset lg:after:group-[.reverse]:-right-32
                '>
                  <Image src={prefixServerUrl(url)} width={width} height={height} alt={alternativeText || Title} className="shadow-md relative z-20 md:group-[.reverse]:ml-auto" />
                </div>
                <div className='md:group-[.reverse]:order-first'>
                  <h3 className='font-serif text-4xl mb-4'>{Title}</h3>
                  <p>{getExcerpt(Description)}</p>
                  <Link href={`/projects/${slug}`} className="inline-block border-4 border-neutral-100 px-4 py-1 my-4 hover:bg-neutral-100 transition duration-300">READ MORE</Link>
                </div>
              </div>
            )
          })}
        </section>
        <section id="skills" className='bg-brand-blue my-16'>
          <div className='container mx-auto py-12 text-center'>
            <span className='text-white mb-4 block'>MY SKILLS</span>
            <h2 className='font-serif text-5xl mb-4 text-white'>What I Know</h2>
            <p className='text-white'>Forgive the tech jargon - these are just some of the technologies and tools I'm familiar with.</p>
            <ul className='grid grid-cols-2 md:grid-cols-5 gap-y-16 mt-8'>
              {skills.map(skill => {
                const { id, attributes: { alternativeText, height, width, url } } = skill
                return (
                  <li key={id} className="flex flex-col items-center">
                    <Image src={prefixServerUrl(url)} className="h-24 w-24 object-contain" width={width} height={height} alt={alternativeText} />
                    <span className='text-white mt-4'>{alternativeText}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        <section id="contact" className='container mx-auto my-16 py-12'>
          <span className='mb-4 block text-center'>LET'S WORK TOGETHER</span>
          <h2 className='font-serif text-5xl mb-4 text-center'>Contact Me</h2>
          <p className='text-center'>I can't wait to discuss your needs for a new website. Let's chat and turn your ideas into a digital reality!</p>
          <div className='flex flex-wrap my-16 gap-20 justify-center items-center text-brand-gray'>
            <form className='flex flex-col gap-4'>
              <div className="relative">
                <input type="text" id="name" className="w-full py-2 px-4 border border-brand-gray peer" placeholder=" " />
                <label htmlFor="name" className="absolute duration-300 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
              </div>
              <div className="relative">
                <input type="email" id="email" className="w-full py-2 px-4 border border-brand-gray peer" placeholder=" " />
                <label htmlFor="email" className="absolute duration-300 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
              </div>
              <div className="relative">
                <textarea id="message" className="w-full py-2 px-4 border border-brand-gray peer" placeholder=" " />
                <label htmlFor="message" className="absolute duration-300 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Message</label>
              </div>
              <button type="submit" className='bg-brand-blue py-2'>LET'S TALK</button>
            </form>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link href="mailto:kevinrkowalski@gmail.com" className='flex items-center gap-4'>
                  <Image src={emailIcon} alt="" />
                  kevinrkowalski@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:401-484-1232" className='flex items-center gap-4'>
                  <Image src={phoneIcon} alt="" />
                  (401) 484-1232
                </Link>
              </li>
              <li>
                <Link href="https://github.com/kevinrkowalski" className='flex items-center gap-4'>
                  <Image src={githubIcon} alt="" />
                  github.com/kevinrkowalski
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </Page>
    </>
  )
}

export async function getServerSideProps() {
  const menuItems = await fetchDb('menus?filters\[slug\][$eq]=main-nav&populate=*')
  const projects = await fetchDb('projects?populate=FeaturedImage')
  const homePageContent = await fetchDb('home-page?populate=*')

  return {
    props: {
      menuItems,
      projects,
      homePageContent
    }
  }
}
