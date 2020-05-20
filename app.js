document.addEventListener('DOMContentLoaded', () => {
    //card options

    const CardArray = (
        {
            name:'fire',
            img: 'images/fire.png'
        },
        {
            name:'fire',
            img: 'images/fire.png'
        },
        {
            name:'earth',
            img: 'images/earth.png'
        },
        {
            name:'earth',
            img: 'images/earth.png'
        },
        {
            name:'water',
            img: 'images/water.png'
        },
        {
            name:'water',
            img: 'images/water.png'
        },
        {
            name:'wind',
            img: 'images/wind.png'
        },
        {
            name:'wind',
            img: 'images/wind.png'
        },
        {
            name:'animal',
            img: 'images/animal.png'
        },
        {
            name:'animal',
            img: 'images/animal.png'
        },
        {
            name:'man',
            img: 'images/man.png'
        },
        {
            name:'man',
            img: 'images/man.png'
        }
    )
    
const grid = document.querySelector('.grid')

//create your board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id, i')
       // card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}


createBoard()
})
