'use client'
import Image from 'next/image'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from './search'

export default function Header() {

  return (
    // <header className="absolute top-0 left-0 h-14 flex items-center justify-between px-4 w-full bg-white">
    <header className="col-span-full h-14 flex items-center justify-between px-4 w-full bg-white">

      <section>
        <a className="flex items-center" href="#">
          <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <span className="ml-2 text-sm font-bold">{process.env.NEXT_PUBLIC_APP_NAME}</span>
        </a>
      </section>

      <nav>
        <ul className="flex items-center">
          <li className="mr-6 search-li">
            <Search />
          </li>
          <li className="mr-6">
            <FontAwesomeIcon
              className="text-xl"
              icon={faCircleHalfStroke}
            />
          </li>
          <li className="mr-6">
            <FontAwesomeIcon
              className="text-xl"
              icon={faBell}
            />
          </li>
          <li className="mr-6 rounded-full">
            <Image
            src="/img/avata-2.png"
            className='text-xl'
            width={30}
            height={30}
            alt="Picture of the author"
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}