'use client'
import { message as messageFunction } from './message'

export const AUTH_USER = process.env.NEXT_PUBLIC_AUTH_USER
const MISSING_PARAM = 'Missing Param Error'
const INVALID_EMAIL = 'InvalidEmailError'
const INVALID_PASSWD = 'InvalidPasswordError'
const EMAIL_NOT_EXIST = 'this email not exist'
const PASSWD_NOT_MATCH = 'passwd not match'

export async function handleLoginSubmit(event: any) {
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
    window.location.replace('/workspace')
  }
}