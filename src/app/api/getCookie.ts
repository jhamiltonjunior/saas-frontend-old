import { cookies } from 'next/headers'

export async function getCookie() {
  'use server'

  const token = cookies().get(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`)?.value

  return token !== undefined ? token : false
}