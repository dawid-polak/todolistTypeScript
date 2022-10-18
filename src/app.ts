const mainInput: HTMLInputElement = document.querySelector('#main-input');
const mainBtn: HTMLButtonElement = document.querySelector('#main-btn');
const listTask: HTMLUListElement = document.querySelector('.tasks');


type Categories = "sport" | "work" | "";

interface Task {
    name: string;
    category?: Categories;
    done: boolean;
};

const tasks: Task[] = [];

const addTekstToTasks = (task: Task) => {
    tasks.push(task);
    deleteTasksInHtml();
    writeTasks(tasks);
};

const addCategoryToTask = (radioChecked: string) => {
    if (radioChecked) {
        return radioChecked
    };
};

mainBtn.addEventListener('click', () => {

    const radioChecked: HTMLInputElement = document.querySelector("input[name='category']:checked");

    addTekstToTasks({
        name: mainInput.value,
        category: radioChecked ? addCategoryToTask(radioChecked.value) as Categories : "",
        done: false
    });

    mainInput.value = '';
 });

 const writeTasks = (tasks) => {
    
    tasks.forEach(task => {
        const li: HTMLElement = document.createElement('li');
        const spanText = document.createElement('span');
        const spanButton = document.createElement('span');
        const deleteButton = document.createElement('button');

        spanText.innerText = task.name;
        deleteButton.innerText = 'delete';

        li.classList.add('task');
        spanText.classList.add('text');
        spanButton.classList.add('btn');

        addColor(task, spanText);

        listTask.appendChild(li);
        li.appendChild(spanText);
        li.appendChild(spanButton);
        spanButton.appendChild(deleteButton);
    });
    
 };

 const deleteTasksInHtml = () => {
    listTask.innerHTML = '';
 };

 const addColor = (task, spanText) => {
    if (task.category === 'sport') {
        spanText.classList.add('category-blue');
    } if (task.category === 'work') {
        spanText.classList.add('category-green');
    };
 };

// remove task after click delete in task
 listTask.addEventListener('click', (e) => {
    const htmlElement = e.target as HTMLElement;

    if (htmlElement.tagName === "BUTTON") {
        const task: HTMLLIElement = htmlElement.closest('.task');
        const textTask: string = task.querySelector('.text').innerHTML;
        
        tasks.forEach((task: Task, index: number) => {

            if(task.name === textTask) {
                tasks.splice(index, 1);
            };
        });
        task.remove();
    } else {
        return;
    };
 });