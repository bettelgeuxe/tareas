import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

//IIFE inmediately invoked function expression
const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");


const creatTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add('card');
    input.value = '';
    
    
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

btn.addEventListener('click',creatTask);

