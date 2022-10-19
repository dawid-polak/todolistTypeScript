const mainInput: HTMLInputElement = document.querySelector('#main-input');
const mainBtn: HTMLButtonElement = document.querySelector('#main-btn');
const listTask: HTMLUListElement = document.querySelector('.tasks');
const btnEdit: HTMLButtonElement = document.querySelector('#edit-category');
const modelEdit: HTMLDivElement = document.querySelector('.modal--select-category');
const btnCloseEdit: HTMLButtonElement = document.querySelector('#close');
const inputAddCategory: HTMLInputElement = document.querySelector('#add--category-input');
const inputColorCategory: HTMLInputElement = document.querySelector('#add--category-input-color')
const btnAddCategory: HTMLButtonElement = document.querySelector('#add--category-btn');
const categoriesList: HTMLDivElement = document.querySelector('.categories-modal');
const sectionCategories: HTMLDivElement = document.querySelector('.section-categories');

type Categories = "sport" | "work" | "";


interface Task {
    name: string;
    category: string;
    color: string;
    done: boolean;
};

interface Category {
    name: string;
    color: string;
}

const tasks: Task[] = [];
const categories: Category[] = [];

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
        category: radioChecked ? addCategoryToTask(radioChecked.value) : "",
        color: radioChecked.title,
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
    spanText.style.color = task.color;
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


btnEdit.addEventListener('click', () => {
    modelEdit.style.display = 'flex';
}); 

btnCloseEdit.addEventListener('click', () => {
    modelEdit.style.display = 'none';
});


const addCategoryToCategories = (category: Category) => {
    categories.push(category);
    renderListCategoryInEdit();
    inputAddCategory.value = '';
};


const deleteCategoryInHtml = () => {
    categoriesList.innerHTML = ''
};

btnAddCategory.addEventListener('click', () => {

    deleteCategoryInHtml();
    addCategoryToCategories({
        name: inputAddCategory.value,
        color: inputColorCategory.value
    });
    renderCategoriesToApp();
});

const renderListCategoryInEdit = () => {

    categories.forEach(category => {

        const text: HTMLParagraphElement = document.createElement('p');
        const btn: HTMLButtonElement = document.createElement('button');

        text.innerText = category.name;
        text.style.color = category.color;

        text.classList.add('category');

        btn.innerText = 'delete';

        categoriesList.appendChild(text);
        text.appendChild(btn);

    })


}

const inputCategory: HTMLInputElement = document.createElement('input');
const labelCategory: HTMLLabelElement = document.createElement('label');


categoriesList.addEventListener('click', (e) => {
    const htmlElement: HTMLElement = e.target as HTMLElement; 

    if (htmlElement.tagName === 'BUTTON') {
        const category = htmlElement.closest('.category');
        const categoryText: string = category.innerHTML;

        categories.forEach((category, index) => {

            if (category.name === categoryText) {
                categories.splice(index, 1);
            }

            const inputCategory: HTMLInputElement = document.querySelector(`#radio-${category.name}`);
            const labelCategory: HTMLLabelElement = document.querySelector(`#label-${category.name}`);

            inputCategory.remove();
            labelCategory.remove();

        })

        category.remove();
    };
});

const renderCategoriesToApp = () => {
    categories.forEach( category => {
        const inputCategory: HTMLInputElement = document.createElement('input');
        const labelCategory: HTMLLabelElement = document.createElement('label');

        inputCategory.setAttribute('type', 'radio');
        inputCategory.setAttribute('id', `radio-${category.name}`);
        inputCategory.setAttribute('name', 'category');
        inputCategory.setAttribute('title', category.color);
        inputCategory.value = category.name;

        labelCategory.setAttribute('for', `radio-${category.name}`);
        labelCategory.setAttribute('id', `label-${category.name}`)
        labelCategory.style.color = category.color;
        labelCategory.innerHTML = category.name.toUpperCase();

        sectionCategories.appendChild(inputCategory);
        sectionCategories.appendChild(labelCategory);
    })
}