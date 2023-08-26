import { Metadata } from "next"

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
      <section className="flex flex-col items-center justify-center min-h-screen">
        {children}
      </section>
    </>
  )
}