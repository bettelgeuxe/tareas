const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
console.log(btn);

const creatTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const task = document.querySelector("[data-task]");
    input.value = '';
    

    const content = `<div>
              <i class="far fa-check-square icon"></i>
              <span class="task">${value}</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;

            task.innerHTML = content;

            console.log(content);
};
//arrow function - funciones anónimas
//btn.addEventListener("click", function(evento){
/*btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
    
})*/

btn.addEventListener('click',creatTask);