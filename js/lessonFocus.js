const tutorialLinks = document.querySelectorAll('aside.tutorials-container > ul > li > a')
let selectedId
let tutorialArray = []

tutorialLinks.forEach(tutorial => {
        tutorialArray.push(tutorial)
        
})
addEventListener('keydown', ({ key }) => {
    tutorialArray.forEach(el => {
        let id = el.getAttribute('id')
        if(id[id.length - 1] === key ){
            el.focus()
        }
    })
})