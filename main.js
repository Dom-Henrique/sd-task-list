const tasks = document.querySelector(".tasks");
const addTask = document.querySelector("#taskBt");
const deleteTask = document.querySelector(".deleteTasks");
// funcao que recebe os valores dos campos e adiciona

addTask.addEventListener("click", function regTask() {
    let taskName = document.querySelector("#taskName").value;
    let taskDesc = document.querySelector("#taskDesc").value;
    let taskDate = document.querySelector("#taskDate").value;

    // cria os elementos
    if (taskName != "" && taskDate != "" && taskDesc != "") {
        let divMainly = document.createElement("div");
        let div = document.createElement("div");
        div.className = "header";
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        // definindo o conteudo dos elementos
        h3.textContent = taskName;
        h4.textContent = taskDate;
        p.textContent = taskDesc;

        div.append(h3, h4);
        divMainly.append(div, p);
        tasks.appendChild(divMainly);
    }
})

deleteTask.addEventListener("click", () => {
    while (tasks.firstChild){
        tasks.removeChild(tasks.firstChild);
    }
})