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

export default checkComplete;