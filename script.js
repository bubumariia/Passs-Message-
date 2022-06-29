const input = document.querySelector("#messageInput")
const button = document.querySelector("#sendBtn")
const p = document.querySelector("p")


button.addEventListener('click', ()=>{
    p.innerText = input.value
    input.value = ''
})