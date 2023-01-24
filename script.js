(() =>{

//IIFE inmediately invoked function expression
const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
console.log(btn);

const creatTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add('card');
    input.value = '';
    
    console.log(checkComplete());
    //crear la estructora parte por parte con createElement

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    //<span class="task">${value}</span>
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    
    ///<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //const content = `
      //  <i class="fas fa-trash-alt trashIcon icon"></i>`;

  //task.innerHTML = content;

  task.appendChild(taskContent);
  task.appendChild(deleteIcon());

  list.appendChild(task);

};

    /*
    const content = `<div>
              ${checkComplete()}
              <span class="task">${value}</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;

            task.innerHTML = content;

            list.appendChild(task);

            console.log(content);
};*/
//arrow function - funciones anónimas
//btn.addEventListener("click", function(evento){
/*btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
    
})*/
console.log(btn);
btn.addEventListener('click',creatTask);

//crear el botón
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',completeTask)
    return i;
};

//arrow function para listener
//crear la funcion que será llamada al hacer click en el botón checkcomplete
const completeTask = (event) => {
    
    const element = event.target;

    //funcion comodin toggle para en lugar de quitar poner poner quitar revisa si existe la quita si no la pone
    /*element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far');*/
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

const deleteIcon = () =>{
    //const content = `
      //  <i class="fas fa-trash-alt trashIcon icon"></i>`;
        const i = document.createElement("i");
        i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
        i.addEventListener("click", deleteTask);
        return i;
}

const deleteTask = (event) =>{
    const parent = event.target.parentElement;
    parent.remove();
}

})();