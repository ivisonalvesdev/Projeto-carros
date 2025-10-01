let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let numberIndicator = indicator.querySelector('.number')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

// Função para atualizar indicadores
function updateIndicators() {
    // Atualiza o número (01, 02, 03...)
    numberIndicator.textContent = '0' + (active + 1)
    
    // Atualiza as bolinhas
    dots.forEach((dot, index) => {
        if (index === active) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    })
}

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')
    
    updateIndicators()
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')
    
    updateIndicators()
}