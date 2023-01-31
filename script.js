import { addTask } from "./components/addTask.js";
import { readTask } from "./components/readTasks.js";
//IIFE inmediately invoked function expression
const btn = document.querySelector("[data-form-btn]");
//const input = document.querySelector("[data-form-input]");

btn.addEventListener('click',addTask);

readTask();
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

//para implementar la terea add Task  se quita creatTask
//btn.addEventListener('click',creatTask);


