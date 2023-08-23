import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Register',
  description: 'Registre-se para acessar o sistema',
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen py-2">
        {children}
      </section>
    </>
  )
}