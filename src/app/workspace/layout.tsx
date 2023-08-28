import { Metadata } from "next"
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import FormLogin from '@/components/forms/formLogin'

export const metadata: Metadata = {
  title: 'Workspace',
  description: 'Registre-se para acessar o sistema',
}

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <section className={`flex flex-col bg-[#ECEFF8] items-center w-full justify-center min-h-screen`}> */}
      <section className={`grid grid-cols-16 grid-rows-[56px] gap-4 bg-[#ECEFF8] w-full h-screen`}>
        <Header />
        <Sidebar />
        {children}
      </section>
    </>
  )
}