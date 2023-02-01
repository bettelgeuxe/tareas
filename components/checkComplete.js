//crear el botón
const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',(evento => completeTask(evento,id)))
    return i;
};

//arrow function para listener en modulo
//crear la funcion que será llamada al hacer click en el botón checkcomplete
const completeTask = (event,id) => {
    
    const element = event.target;

    //funcion comodin toggle para en lugar de quitar poner poner quitar revisa si existe la quita si no la pone
    /*element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far');*/
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    console.log("check id", id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex( item => item.id === id )
    console.log(index);
    tasks[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


export default checkComplete;