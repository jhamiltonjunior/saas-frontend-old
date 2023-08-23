'use client'
import Image from 'next/image'
import Message from '@/components/message'
import React, { useState } from 'react'
import { redirect, useRouter } from 'next/navigation'

import cookie from 'cookie'
import Link from 'next/link'


export const AUTH_USER = process.env.NEXT_PUBLIC_AUTH_USER
const MISSING_PARAM = 'Missing Param Error'

const classOfLabel = 'block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'
const classOfInput = 'appearance-none block w-full text-zinc-950 border default-input rounded py-3 px-4 mb-3 leading-tight focus:outline-none'

export default function Home() {
  let string = ''
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

    const message = await response.json()
    console.log(message)

    console.log(response) 



    // falta eu fazer algumas validacoes e verificar tbm no backend pq nao retorna erro quando a senha e o email nao esta correta


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

    if (message === 'email exist') {
      
      const message = document.querySelector('.message-component') as HTMLElement
      const span = document.querySelector('.message-component span') as HTMLElement
      const emailInput = document.querySelector('[name="email"]') as HTMLElement
      
      emailInput.classList.add('border-red-500')
      emailInput.classList.remove('border-zinc-950')

      emailInput.addEventListener('focus', () => emailInput.classList.remove('border-red-500'))

      span.innerHTML = 'Este Email Já Existe!'

      message?.classList.remove('hidden')
      // message?.classList.add('block')
      message?.classList.add('fixed')

      setTimeout(() => {
        message?.classList.remove('block')
        message?.classList.add('hidden')
      }, 6000)

      return 
    }

    if (message?.token?.length > 10) {
      cookie.serialize('auth-token', message.token)
      window.location.replace('/workspace')
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
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-10 text-white font-bold py-2 px-4 rounded default-button">
          Login
        </button>

        <p className="mt-10 text-sm text-center text-gray-500">Já tem uma conta? <Link className="text-blue-500"  href="/login">Faça login aqui</Link>.</p>
      </form>
    </>
  )
}
