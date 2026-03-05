function adicionarTarefa(){
    let valorInput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorInput + '<span onclick="delatarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    valorInput = ""
}

function delatarTarefa(li){
    li.parentElement.remove()
}