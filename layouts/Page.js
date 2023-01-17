import Header from "../components/Header"
import Footer from "../components/Footer"

const Page = ({ children, menuItems }) => {
  return (
    <>
      <Header menuItems={menuItems} />
      <main className="md:mt-24">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Page
