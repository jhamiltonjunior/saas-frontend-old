import Message from "@/components/message"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Keep a lively mind - Keepyboard - Keep a Live - Keep note live',
  description: 'Registre-se para acessar o sistema',
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Message levelOfAlert="error" />
      <section className="flex flex-col items-center justify-center min-h-screen py-2">

        {children}
      </section>
    </>
  )
}