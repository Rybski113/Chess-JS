const king = document.querySelector('.chess-piece')
const squares = document.querySelectorAll('.square')

king.addEventListener('dragstart', dragStart)

function dragStart(e) {
    console.log(e.target)
}