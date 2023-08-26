'use client'

import Link from "next/link"

import { handleLoginSubmit } from "@/app/utils/handleLoginSubmit"

const classOfLabel = 'block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'
const classOfInput = 'appearance-none block w-full text-zinc-950 border default-input rounded py-3 px-4 mb-3 leading-tight focus:outline-none'

export default function FormLogin() {
  return (
    <>
      <form
        onSubmit={handleLoginSubmit}
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