//procurar o botão
document.querySelector("#add-time")
.addEventListener("click",cloneField)
//Quando clicar no botão

//executar os campos
function cloneField(){
//duplicar os campos
const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
// limpar os campos
const fields = newFieldContainer.querySelectorAll("input")
//para cada campo limpar
fields.forEach(function(field){
    field.value = ""
})
document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
