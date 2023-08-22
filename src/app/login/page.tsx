import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login page',
  description: 'Faça login para acessar o sistema',
}

export default function Home() {
  return <h1>Hello, Login Page!</h1>
}
