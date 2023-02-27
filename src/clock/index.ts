export const clock = () => {
    function createHourOfSecounds(segundos: number) {
        const data = new Date(segundos * 1000)

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'

        });
    }


    const clock = document.querySelector('.clock') as Element
    const init = document.querySelector('.init') as Element
    const pause = document.querySelector('.pause') as Element
    const stop = document.querySelector('.stop') as Element

    // não preciso dessas variaveis
    // preciso apenas quando for usar a segundo opção de código
    // não recomendado
    // const iniciar = document.querySelector('.iniciar')
    // const pausar = document.querySelector('.pausar')
    // const zerar = document.querySelector('.zerar')

    const input = document.querySelector('input')
    const insertTimerName = document.querySelector('.insert-timer-name')

    const getTimerName = document.querySelector('.get-timer-name')
    const oldTimerName = document.querySelector('.old-timer-name')

    const mensagem = document.querySelector('.message') as Element
    const oldTimer = document.querySelector('.old-timer')
    const oldTimerContent = document.querySelector('.old-timer-content')
    console.log(oldTimer)
    let segundos = 0
    let timer: NodeJS.Timer

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            clock.innerHTML = createHourOfSecounds(segundos)
        }, 1000)
    }

    // function getTimerName() {
    //     inser
    // }

    // para diminuir a quantidade de **iniciar.addEventListener('click', function(e)**
    // isso vai fzr alguma coisa quando eu clicar no  
    // botao de iniciar/pausar/zerar no HTML
    document.addEventListener('click', function (e) {
        const element = e.target

        if (element && input && getTimerName) {
            if (element.classList.contains('insert-timer-name')) {
                if (input.classList.contains('timer-name')) {
                    getTimerName.innerHTML = input.value
                    input.value = ""
                }
            }
        }

        if (element && element.classList.contains('init')) {
            clock.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
            mensagem.innerHTML = 'Sua tarefa foi iniciada'
            mensagem.style.display = 'block'

            element.style.display = 'none'
            pause.style.display = 'flex'
            stop.style.display = 'flex'
        }

        if (element.classList.contains('pause')) {
            if (clock.textContent == '00:00:00') return

            clock.classList.add('pausado')
            clearInterval(timer)
            mensagem.display = 'block'
            mensagem.innerHTML = 'O seu Timer foi pausado'
        }

        if (element.classList.contains('stop')) {
            clearInterval(timer)


            if (clock.textContent == '00:00:00') {
                // oldTimerName.innerHTML = 'Seu timer não tem nome'
                return
            }

            if (oldTimer) {
                oldTimer.style.display = 'block'
                oldTimer.style.padding = '20px 10px'
                oldTimer.style.border = '3px solid black'

                if (getTimerName.textContent == "") {
                    oldTimerName.innerHTML = 'Seu timer não tem nome'
                } else {
                    oldTimerName.innerHTML = 'Nome do seu timer: ' + getTimerName.textContent
                }

                oldTimerContent.innerHTML += clock.textContent + '<br>'
            }

            clock.innerHTML = '00:00:00'
            init.style.display = 'flex'
            pause.style.display = 'none'
            stop.style.display = 'none'

            segundos = 0
            clock.classList.remove('pausado')

            mensagem.innerHTML = 'O seu Timer foi zerado'

            setInterval(function () {
                mensagem.innerHTML = ''
                mensagem.style.padding = '0px 0px'
                mensagem.style.border = '0px solid black'
            }, 4000)
        }
    })

    /*
    iniciar.addEventListener('click', function(e){
        
    })
  
    pausar.addEventListener('click', function(e){
        
    })
  
    zerar.addEventListener('click', function(e){
        
    })
    */
}
