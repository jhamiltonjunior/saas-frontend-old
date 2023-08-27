import { Metadata } from "next"
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import FormLogin from '@/components/forms/formLogin'
import { blueLigth } from '@/app/utils/classNameVariables'

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
      <section className={`flex flex-col bg-[#ECEFF8] items-center w-full justify-center min-h-screen`}>
        <Header />
        {children}
        <Sidebar />
      </section>
    </>
  )
}