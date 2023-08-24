'use client'
import Image from 'next/image'
import Message from '@/components/message'
import { message as messageFunction } from '@/app/utils/message'
import Link from 'next/link'

import cookie from 'cookie'


export const REGISTER_USER = process.env.NEXT_PUBLIC_REGISTER_USER
const MISSING_PARAM = 'Missing Param Error'
const INVALID_NAME = 'InvalidNameError'
const INVALID_EMAIL = 'InvalidEmailError'
const INVALID_PASSWD = 'InvalidPasswordError'
const EMAIL_EXIST = 'email exist'

const classOfLabel = 'block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'
const classOfInput = 'appearance-none block w-full text-zinc-950 border default-input rounded py-3 px-4 mb-3 leading-tight focus:outline-none'

export default function Home() {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = new FormData(event.target)

    const name = data.get('name')?.toString().trim().replace(/( )+/g, ' ') as FormDataEntryValue
    const email = data.get('email') as FormDataEntryValue
    const password = data.get('password')?.toString() as FormDataEntryValue
    const cpfCnpj = data.get('cpfCnpj')
    const mobilePhone = data.get('mobilePhone')
    const notificationDisabled = data.get('notificationDisabled')

    if (name.length < 2 || name.length > 255) {
      messageFunction(
        'Insira um nome válido!',
        'error',
        ['border-red-500', 'border-zinc-950'],
        document.querySelector('[name="name"]') as HTMLElement,
      )

      return
    }

    if (password.length < 6 || password.length > 33) {
      messageFunction(
        'Insira uma senha entre 6 e 33 caracteres!',
        'error',
        ['border-red-500', 'border-zinc-950'],
        document.querySelector('[name="password"]') as HTMLElement,
      )
      return 
    }

    const response = await fetch(`${REGISTER_USER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpfCnpj,
        mobilePhone,
        notificationDisabled,
      }),
    })

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

    if (message === EMAIL_EXIST) {

      messageFunction(
        'Este Email Já Existe! <a href="/login">Tente fazer login</a>!',
        'error',
        ['border-red-500', 'border-zinc-950'],
        document.querySelector('[name="email"]') as HTMLElement,
      )

      return
    }

    if (message === INVALID_NAME) {

      messageFunction(
        'Insira um nome válido!',
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

    if (message?.token.length > 10) {
      document.cookie = `${process.env.NEXT_PUBLIC_COOKIE_NAME}=${message.token}`

      // possivel codigo para pegar o toke
      // ele pega o token que esta no cookie
      // document.cookie.split(';')
      //   .filter((item) => item.includes(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`))
      //   .join('')
      //   .split('=')[1]

      messageFunction(
        'Conta criada com sucesso!',
        'success',
      )
      setTimeout(() => {
        window.location.replace('/workspace')
      }, 3000)
    }
  }

  return (
    <>
      <form
        // method="POST"
        // action={`${REGISTER_USER}/api/user/register`}
        onSubmit={handleSubmit}
        className="w-full shadow-2xl max-w-lg bg-white p-10 rounded-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className={classOfLabel} htmlFor="grid-first-name">
              Name
            </label>
            {/* border-red-500 */}
            <input
              className={classOfInput}
              id="name"
              type="text"
              placeholder="Maguila"
              required
              name="name" />
            <p className="text-red-500 text-xs italic hidden">Please fill out this field.</p>
          </div>


        </div>

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

        <div className="flex flex-wrap -mx-3 mb-6">
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
            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you&lsquo;d like</p> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className={classOfLabel.replace('uppercase', '')} htmlFor="grid-password">
              CPF ou CNPJ (Opcional)
            </label>
            <input
              className={classOfInput}
              id="cpfCnpj"
              type="text"
              placeholder="123.456.789-12"
              name="cpfCnpj" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <label className={classOfLabel.replace('uppercase', '')} htmlFor="grid-password">
              Número de Celular (Opcional)
            </label>
            <input
              className={classOfInput}
              id="mobilePhone"
              type="password"
              placeholder="(12) 9 8765-4321"
              name="mobilePhone" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="flex items-center w-full px-3 mt-6 mb-6 md:mb-0">
            <input
              id="checked-checkbox"
              type="checkbox"
              name="notificationDisabled"
              className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checked-checkbox" className="cursor-pointer ml-2 text-sm font-medium text-black">Deseja receber notificações?</label>
          </div>
        </div>

        <button
          // onClick={handleSubmit(this)}
          type="submit"
          className="w-full mt-10 text-white font-bold py-2 px-4 rounded default-button">
          Registrar-se
        </button>

        <p className="mt-10 text-sm text-center text-gray-500">Já tem uma conta? <Link className="text-blue-500"  href="/login">Faça login aqui</Link>.</p>
      </form>
    </>
  )
}
