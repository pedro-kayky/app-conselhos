document.getElementsByClassName('advice-update'),addEventListener('click',()=>{
    tirarConselhoAleatorio()
    })

async function criarConselhos(){
   const url= 'https://api.adviceslip.com/advice'
   const resposta= await fetch (url)
   return await resposta.json()
}
criarConselhos()



async function tirarConselhoAleatorio(){''
const conselho = await criarConselhos()
const slip = await (conselho.slip)
const texto= slip.advice;
document.getElementsByClassName('advic-description')[0].innerText = texto;
const titulo=slip.id;
document.getElementsByClassName('advice-id')[0].innerText = titulo



}

tirarConselhoAleatorio()