import Image from 'next/image'
import { getCookie } from '../api/getCookie'
import { verify } from '../utils/verify'
import FormLogin from '@/components/forms/formLogin'
import Sidebar from '@/components/sidebar'

export default async function Page() {
  const token = await getCookie()

  if (!token) {
    return (
      <main>
        <FormLogin />
      </main>
    )
  }

  const verified = await verify(token)

  if (verified === 'Unauthorized') {
    return (
      <section 
      className="backdrop-blur-sm w-full h-screen flex flex-col items-center justify-center min-h-screen"
      >
        <Sidebar></Sidebar>
        {/* <h1 className="text-2xl font-bold pb-10 fixed top-[7%]">
          Não Autorizado
        </h1>
        <p className="text-xl pb-10">
          Voce não está autorizado a acessar esta página. Tente fazer login.
        </p>
        <FormLogin /> */}
      </section>
    )
  }

  return (
    <form>
      {/* <button type="submit">{verified}</button> */}
    </form>
  )
}