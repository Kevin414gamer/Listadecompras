let input = document.getElementById("item-input");
let button = document.getElementById("item-button");
let ul = document.getElementById("item-ul");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");

function criarElemento(){
   
    let li = document.createElement("li");
    
    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "remove";

    li.appendChild(xButton);

    let text = document.createTextNode(input.value)
    if (input.value === "") {
        alert("Insira um item!")
        return false
      } else {
        li.appendChild(xButton);
        li.appendChild(text);
        ul.appendChild(li);
        
      }
/*o código acima a partir do if é para inserir um item no input 
obrigatoriamente */


    li.appendChild(text);

    ul.appendChild(li);

    input.value = "";

    buttonEvents();
}

function deleteItem(){

    this.parentElement.remove();

}

/*o codigo abaixo (addEventListener keypress) é para ter a opção de 
adicionar o item do input apertando o enter*/

input.addEventListener('keypress', function(e){
    if(e.which == 13){
    criarElemento();
    }
  }, false);

function buttonEvents(){

for (let i = 0; i < itemButtons.length; i++){
    itemButtons[i].addEventListener("click", deleteItem)

    }

}

button.addEventListener("click", criarElemento)
buttonEvents();
  
