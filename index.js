
const form =document.querySelector('form')

const formName =document.querySelector('#Name')

const formEmail =document.querySelector('#Email')

const error =document.querySelector('#error')

form.addeventlistener('submit', function(e){e.preventDefault()

    if(formName.value === ''||form.value ===''){error.getElementsByClassName.display = 'block'

    setTimeout(()=>{
        error.getElementsByClassName.display = 'none'
    },5000)

    return
}

alert(`Hello ${formName.value},your form has been submitted successfully.\nYour email is ${formEmail.value}`)
   console.log(formName.value)
   console.log(formEmail.value)

 formName.value = ''
 formEmail.value = ''
})
