import Link from 'next/link'
import Image from 'next/image'

import chevron from '../public/img/circled-down-chevron.svg'

const Footer = () => {
  return (
    <footer className="bg-neutral-100 px-4 py-8">
      <div className="container mx-auto flex justify-between">
        <p>&copy; Kevin Kowalski</p>
        <Link href="#" className="inline-flex gap-4 items-center">
          Back to Top
          <Image src={chevron} alt="" className="rotate-180" />
        </Link>
      </div>

    </footer>
  )
}

export default Footer