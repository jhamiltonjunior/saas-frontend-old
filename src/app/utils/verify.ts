import { fetchData } from "../api/fetch"

export async function verify(token: string) {
  'use server'

  return fetchData(
    `${process.env.NEXT_PUBLIC_API_URL_TASKS}/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}a`
    }
  })
}