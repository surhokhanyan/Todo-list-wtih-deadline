let toDo = document.querySelector("#toDo");
let deadLine = document.querySelector("#deadLine");
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");
let info = document.querySelector("#info");

addBtn.addEventListener("click", ()=>{
    if (toDo.value != 0 && deadLine.value != 0){
        let div = info.appendChild(document.createElement("div"));
        let firstP = div.appendChild(document.createElement("p"));
        let secondP = div.appendChild(document.createElement("p"));
        firstP.textContent = toDo.value;
        secondP.textContent = deadLine.value;
        let close = secondP.appendChild(document.createElement("i"));
        close.setAttribute("class", "fa-solid fa-x");
        toDo.value = null;
        deadLine.value = null;
        close.addEventListener("click", ()=>{
            div.remove();
        });
    }else{
        return;
    };
});
clearBtn.addEventListener("click", ()=>{
    let delDivs = document.querySelectorAll("#info div");
    delDivs.forEach(item =>{
        item.remove();
    })
})