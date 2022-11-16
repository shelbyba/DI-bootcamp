let form=document.getElementById('form')
form.addEventListener('submit', handleSubmit)
function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    console.log('submited')
   
}


const tasks=[];

