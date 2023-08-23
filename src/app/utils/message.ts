
// primeiro elemento e o componente de mensagem
// segundo elemento e o input que vai receber o focus
export function message (
  message: string, 
  levelOfAlert: string,
  className?: string[],
  element?: HTMLElement,

  ) {
  let setComponentColor = ''
  let setSVGColor = ''

  if (levelOfAlert === 'success') {
    setComponentColor = 'bg-green-50 border border-green-400 text-red-700'
    setSVGColor = 'text-green-600'


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
  
  svg.classList.add(setSVGColor)
  span.classList.add(setSVGColor)

  if (element && className) {
    element.classList.add(className[0])
    element.classList.remove(className[1])

    element.addEventListener('focus', () => {
      element.classList.remove('border-red-500')
      
      messageComponent.classList.remove('block')
      svg.classList.remove(setSVGColor)
      span.classList.remove(setSVGColor)
      
      messageComponent.classList.add('hidden')
      
      for (const classNames of setComponentColor.split(' ')) {
        messageComponent.classList.remove(classNames)
        svg.classList.remove(setSVGColor)
      }
    })
  }
  

  messageComponent.classList.remove('hidden')
  messageComponent.classList.add('fixed')

  span.innerHTML = message
  messageComponent.classList.add('transition')

  for (const classNames of setComponentColor.split(' ')) {
    messageComponent.classList.add(classNames)
  }

  svg.addEventListener('click', () => {
    messageComponent.classList.remove('block')
    messageComponent.classList.add('hidden')
    
    svg.classList.remove(setSVGColor)
    span.classList.remove(setSVGColor)
    
    for (const classNames of setComponentColor.split(' ')) {
      messageComponent.classList.remove(classNames)
    }
  })

  // if(messageComponent.classList.contains('block')){
  //   setTimeout(() => {
  //     messageComponent.classList.remove('block')
  //     messageComponent.classList.add('hidden')
  //   }, 6000)
  // }

}