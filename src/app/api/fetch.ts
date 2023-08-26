export async function fetchData(url: string, options: any) {
  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return response.statusText
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}
