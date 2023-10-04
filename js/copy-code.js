const copyCodes = document.querySelectorAll('.copy-code')
let keyArr = []
copyCodes.forEach(code => {
    code.addEventListener('keydown', copyCode)
    code.addEventListener('click', copyCode)
})
function copyCode(code){

    if(code.keyCode){
        keyArr.unshift(code.keyCode)
        if(keyArr.length > 2){
            keyArr.pop()
        }
        if(keyArr[0] === 67 && keyArr[1] === 91){
            let copyText = code.target.innerText
            navigator.clipboard.writeText(copyText);
            animateCode(code)
        }
    }
    else if(code.target){
        let copyText = code.target.innerText
        navigator.clipboard.writeText(copyText);
        animateCode(code)
    }
}

function animateCode(code){
    code.target.classList.remove('deanimate')
    code.target.classList.add('animate')
    setTimeout(() => {
        code.target.classList.remove('animate')
        code.target.classList.add('deanimate')
    },100)
    
    
    
    
    
}

