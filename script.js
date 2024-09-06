const unOrdered_list = document.querySelector(".ul")
const menu = document.querySelector(".menu")
const cancel = document.querySelector(".cancel")
const wait_list = document.querySelector(".wait-list")
const section = document.querySelector(".section1")

menu.addEventListener("click", (e) => {
    menu.style.display ="none"
    cancel.style.display ="block"
    unOrdered_list.style.display ="flex"
    wait_list.style.display ="block"
    section.style.display ="none"
})

cancel.addEventListener("click", (e) => { 
  menu.style.display ="block"
  cancel.style.display ="none"
  unOrdered_list.style.display ="none"
  location.reload()

   
})
