import { creatTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from './dateElement.js'

export const readTask = () =>{

    const list = document.querySelector('[data-list]');
    console.log(list);

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(taskList);

    dates.forEach( date => {
        console.log(date);
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            list.appendChild(creatTask(task));
        });
    });
};