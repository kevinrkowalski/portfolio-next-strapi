import Link from 'next/link'
import { fetchDb } from '../../helpers/helpers'
import Page from '../../layouts/Page'
// import SeoHead from '../../components/SeoHead'

const Index = ({ menuItems, locations }) => {
  console.log(locations)

  return (
    <>
      {/* <SeoHead
        title={metaTitle}
        description={metaDescription}
        robots={metaRobots}
      /> */}
      <Page menuItems={menuItems}>
        <section className='px-4 lg:px-32 xl:px-56'>
          <h1 className='font-serif text-6xl font-bold highlight inline-block mb-8'>Areas I Serve</h1>
          <p className="mb-4">I am available to design and develop websites accross the world. Currently, I'm located in Massachusetts and serve some of the below areas.</p>
          <ul className="columns-2 gap-4">
            {locations.data.map(location => {
              const { id, attributes: { locationName, slug } } = location
              return (
                <li key={id} className="mb-4">
                  <Link href={'/areas-i-serve/' + slug} className="font-bold">{locationName}</Link>
                </li>
              )
            })}
          </ul>
        </section>
      </Page>
    </>
  )
}

export default Index

export async function getServerSideProps(context) {
  const menuItems = await fetchDb('menus?filters\[slug\][$eq]=main-nav&populate=*')
  const locations = await fetchDb(`locations?fields[0]=locationName&fields[1]=slug`)

  return {
    props: {
      menuItems,
      locations
    }
  }
}