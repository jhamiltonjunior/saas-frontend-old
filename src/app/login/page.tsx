'use client'
import Image from 'next/image'
import Link from 'next/link'

import { message as messageFunction } from '@/app/utils/message'


export const AUTH_USER = process.env.NEXT_PUBLIC_AUTH_USER
const MISSING_PARAM = 'Missing Param Error'
const INVALID_EMAIL = 'InvalidEmailError'
const INVALID_PASSWD = 'InvalidPasswordError'
const EMAIL_NOT_EXIST = 'this email not exist'
const PASSWD_NOT_MATCH = 'passwd not match'

const classOfLabel = 'block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'
const classOfInput = 'appearance-none block w-full text-zinc-950 border default-input rounded py-3 px-4 mb-3 leading-tight focus:outline-none'

export default function Home() {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = new FormData(event.target)

    const email = data.get('email')
    const password = data.get('password')

    const response = await fetch(`${AUTH_USER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    if (response.status === 500) {
      messageFunction(
        'Tivemos um erro no nosso servidor!',
        'error',
      )
      return
    }

    const message = await response.json()

    if (message === MISSING_PARAM) {
      const message = document.querySelector('.message-component')
      message?.classList.add('block')
      message?.classList.remove('hidden')


      setTimeout(() => {
        message?.classList.add('hidden')
        message?.classList.remove('block')
      }, 3000)

      return
    }
    
    if (message === EMAIL_NOT_EXIST) {
      messageFunction(
        'Este email não existe! <a href="/register" class="text-blue-500 underline">tente registrar-se</a>',
        'error',
        ['border-red-500', 'border-zinc-950'],
        document.querySelector('[name="email"]') as HTMLElement,
      )

      return
    }

    if (message === INVALID_EMAIL) {
      messageFunction(
        'Insira um email válido!',
        'error',
        ['border-red-500', 'border-zinc-950'],
        document.querySelector('[name="email"]') as HTMLElement,
      )

      return
    }

    if (message === INVALID_PASSWD) {

      messageFunction(
        'Insira uma senha válida!',
        'error',
        ['border-red-500', 'border-zinc-950'],
        document.querySelector('[name="email"]') as HTMLElement,
      )

      return
    }

    if (message === PASSWD_NOT_MATCH) {

      messageFunction(
        'Senha incorreta!',
        'error',
        ['border-red-500', 'border-zinc-950'],
        document.querySelector('[name="email"]') as HTMLElement,
      )

      return
    }

    if (message?.token?.length > 10) {

      document.cookie = `${process.env.NEXT_PUBLIC_COOKIE_NAME}=${message.token}`

      // possivel codigo para pegar o toke
      // ele pega o token que esta no cookie
      // document.cookie.split(';')
      //   .filter((item) => item.includes(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`))
      //   .join('')
      //   .split('=')[1]

      messageFunction(
        'Boa, vocé está logado!',
        'success',
      )
      setTimeout(() => {
        // window.location.replace('/workspace')
      }, 2000)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full shadow-2xl max-w-lg bg-white p-10 rounded-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className={classOfLabel} htmlFor="grid-last-name">
              Email
            </label>
            <input
              className={classOfInput}
              id="grid-last-name"
              type="email"
              placeholder="name@example.com"
              required
              name="email" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <label className={classOfLabel} htmlFor="grid-password">
              Password
            </label>
            <input className={classOfInput}
              id="password"
              type="password"
              placeholder="******************"
              required
              name="password" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-10 text-white font-bold py-2 px-4 rounded default-button">
          Login
        </button>

        <p className="mt-10 text-sm text-center text-gray-500">
          Ainda não tem uma conta? <Link className="text-blue-500"  href="/register">Crie uma aqui</Link>.</p>
      </form>
    </>
  )
}
