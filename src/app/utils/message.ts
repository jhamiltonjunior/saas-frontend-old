
// primeiro elemento e o componente de mensagem
// segundo elemento e o input que vai receber o focus
export function message (
  className: string[],
  message: string, 
  element: HTMLElement,
  levelOfAlert: string,

  ) {
  let setComponentColor = ''
  let setSVGColor = ''

  if (levelOfAlert === 'success') {
    setComponentColor = 'bg-green-100 border border-green-400 text-red-700'
    setSVGColor = 'text-red-500'


  } 
  
  else if (levelOfAlert === 'error') {
    setComponentColor = 'bg-red-100 border border-red-400 text-red-700'
    setSVGColor = 'text-red-500'
  }
  
  
  else if (levelOfAlert === 'warning') {
    setComponentColor = 'bg-yellow-100 border border-yellow-400 text-yellow-700'
    setSVGColor = 'text-yellow-500'
  } else if (levelOfAlert === 'info') {
    setComponentColor = 'bg--100 border border-red-400 text-red-700'
    setSVGColor = 'text-red-500'
  } else if (levelOfAlert === 'new') {
    setComponentColor = 'bg-blue-100 border border-blue-400 text-blue-700'
    setSVGColor = 'text-blue-500'
  }

  const messageComponent = document.querySelector('.message-component') as HTMLElement
  const span = document.querySelector('.message-component span') as HTMLElement
  const svg = document.querySelector('.message-component span svg') as HTMLElement

  element.classList.add(className[0])
  element.classList.remove(className[1])

  element.addEventListener('focus', () => element.classList.remove('border-red-500'))
  svg.addEventListener('click', () => {
    messageComponent.classList.remove('block')
    messageComponent.classList.add('hidden')
    return
  })

  messageComponent.classList.remove('hidden')
  messageComponent.classList.add('fixed')

  span.innerHTML = message
  svg.classList.add(`${setSVGColor}`)
  messageComponent.classList.add('transition')
  for (const classNames of setComponentColor.split(' ')) {
    messageComponent.classList.add(classNames)
  }

  setTimeout(() => {
    messageComponent.classList.remove('block')
    messageComponent.classList.add('hidden')
  }, 6000)

}