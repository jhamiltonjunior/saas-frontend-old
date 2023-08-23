'use client'
import Image from 'next/image'
import Message from '@/components/message'
import { useRouter } from 'next/router'
import ReactDom from 'react-dom'

export const REGISTER_USER = process.env.NEXT_PUBLIC_REGISTER_USER
const MISSING_PARAM = 'Missing Param Error'

const classOfLabel = 'block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'
const classOfInput = 'appearance-none block w-full text-zinc-950 border default-input rounded py-3 px-4 mb-3 leading-tight focus:outline-none'

export default function Home() {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = new FormData(event.target)

    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')
    const cpfCnpj = data.get('cpfCnpj')
    const mobilePhone = data.get('mobilePhone')
    const notificationDisabled = data.get('notificationDisabled')

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

    const json = await response.json()

    if (json === MISSING_PARAM) {
      const body = document.querySelector('main')
      return <Message message="Insira Todos os Campos Obrigatórios" levelOfAlert="error" />
    }
  }

  return (
    <form
      action={`${REGISTER_USER}/api/user/register`}
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
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-black">Deseja receber notificações?</label>
        </div>
      </div>

      <button
        className="w-full mt-10 text-white font-bold py-2 px-4 rounded default-button">
        Registrar-se
      </button>
    </form>
  )
}
