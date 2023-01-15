import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

import menuIcon from '../public/img/menu.svg'

const Header = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const windowWidth = useWindowSize().width

  return (
    <header>
      <nav className="relative md:fixed md:flex items-center top-0 left-0 bg-white">
        <div className="flex justify-between items-center bg-brand-gray p-4 text-white">
          <div className="text-3xl font-bold">
            <Link aria-current="page" href="/">Kevin K.</Link>
          </div>
          <button type="button" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src={menuIcon} alt="menu icon" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 absolute top-full left-0 w-full bg-white md:static md:flex-row md:w-auto" style={{ display: (isMenuOpen || windowWidth > 768) ? '' : 'none' }}>
          {menuItems.map((item) => (
            <li key={item.id} className="p-4 w-full uppercase md:w-auto">
              <Link href={item.url} className="block text-center">{item.title.rendered}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  )
}

export default Header