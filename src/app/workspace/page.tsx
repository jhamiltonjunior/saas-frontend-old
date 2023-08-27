import Image from 'next/image'
import { getCookie } from '../api/getCookie'
import { verify } from '../utils/verify'
import FormLogin from '@/components/forms/formLogin'
import Sidebar from '@/components/sidebar'

export default async function Page() {
  // const token = await getCookie()

  // if (!token) {
  //   return (
  //     <section className="fixed z-50 bg-opacity-25 flex backdrop-blur-sm items-center justify-center w-screen h-screen space-x-6 bg-gray-300">
  //       <FormLogin />
  //     </section>
  //   )
  // }

  // const verified = await verify(token)

  // if (verified === 'Unauthorized') {
  //   return (
  //     <section className="fixed z-50 bg-opacity-25 flex backdrop-blur-sm items-center justify-center w-screen h-screen space-x-6 bg-gray-300">
  //       <FormLogin />
  //     </section>
  //   )
  // }

  return (
    <form>
      {/* <button type="submit">{verified}</button> */}
    </form>
  )
}