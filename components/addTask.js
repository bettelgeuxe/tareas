import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTask } from "./readTasks.js";

export const addTask = (evento) =>{
    evento.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date");

    const value = input.value;
    const date = calendar.value;
    //Se agregó cdn librería moment parte inferior
    const dateFormat = moment(date).format('DD/MM/YYYY');

    if(value === "" || date === ""){
        return;
    }
    input.value = '';
    //resetear fecha que queda con la última seleccionada
    calendar.value='';

    const complete = false;

    //crear un objeto para almacenar la tarea y la fecha
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
      };

      list.innerHTML = '';
      //const taskList = [];
      //para almacenar en local storage no se crea arreglo sino:
      //las barritas o pipe son para indicar que si ya tiene info se comporte de una forma y si no inicie como arreglo vacío
      //si la primera afirmación es true no entra a la segunda
      //se debe parsear ya que push no es de string 
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    //agregar al arreglo
    taskList.push(taskObj);
    //almacenar en local storage
    localStorage.setItem("tasks", JSON.stringify(taskList));

    readTask();
    //const task = creatTask(taskObj);
    //list.appendChild(task);

    
  }
  
    export const creatTask = ({value,dateFormat,complete,id}) => {
    const task = document.createElement("li");
        task.classList.add('card');
    //crear la estructora parte por parte con createElement
    const taskContent = document.createElement("div");
      console.log(complete); 

      //Para dar un identificador unico usaremos librería externa uuid cdn

      const check = checkComplete(id);

      if(complete){
        
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
        
      }
      
        taskContent.appendChild(check);
      //<span class="task">${value}</span>
    const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);
    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
    ///<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //const content = `
    //  <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    return task;
};
  
  