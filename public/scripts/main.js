// Importação do Modal.js e atribuição da função a uma variável
import Modal from './modal.js'
const modal = Modal()

// Variáveis
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Abrir modal
function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove('red') : modalButton.classList.add('red')
    
    modal.open()
}

// Selecionar os botões 'check'
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

// Selecionar os botões 'delete'
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})