const mainInput = document.querySelector('#main-input');
const mainBtn = document.querySelector('#main-btn');
const listTask = document.querySelector('.tasks');
const btnEdit = document.querySelector('#edit-category');
const modelEdit = document.querySelector('.modal--select-category');
const btnCloseEdit = document.querySelector('#close');
const inputAddCategory = document.querySelector('#add--category-input');
const inputColorCategory = document.querySelector('#add--category-input-color');
const btnAddCategory = document.querySelector('#add--category-btn');
const categoriesList = document.querySelector('.categories-modal');
const sectionCategories = document.querySelector('.section-categories');
;
const tasks = [];
const categories = [];
const addTekstToTasks = (task) => {
    tasks.push(task);
    deleteTasksInHtml();
    writeTasks(tasks);
};
const addCategoryToTask = (radioChecked) => {
    if (radioChecked) {
        return radioChecked;
    }
    ;
};
mainBtn.addEventListener('click', () => {
    const radioChecked = document.querySelector("input[name='category']:checked");
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
        const li = document.createElement('li');
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
    const htmlElement = e.target;
    if (htmlElement.tagName === "BUTTON") {
        const task = htmlElement.closest('.task');
        const textTask = task.querySelector('.text').innerHTML;
        tasks.forEach((task, index) => {
            if (task.name === textTask) {
                tasks.splice(index, 1);
            }
            ;
        });
        task.remove();
    }
    else {
        return;
    }
    ;
});
btnEdit.addEventListener('click', () => {
    modelEdit.style.display = 'flex';
});
btnCloseEdit.addEventListener('click', () => {
    modelEdit.style.display = 'none';
});
const addCategoryToCategories = (category) => {
    categories.push(category);
    renderListCategoryInEdit();
    inputAddCategory.value = '';
};
const deleteCategoryInHtml = () => {
    categoriesList.innerHTML = '';
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
        const text = document.createElement('p');
        const btn = document.createElement('button');
        text.innerText = category.name;
        text.style.color = category.color;
        text.classList.add('category');
        btn.innerText = 'delete';
        categoriesList.appendChild(text);
        text.appendChild(btn);
    });
};
const inputCategory = document.createElement('input');
const labelCategory = document.createElement('label');
categoriesList.addEventListener('click', (e) => {
    const htmlElement = e.target;
    if (htmlElement.tagName === 'BUTTON') {
        const category = htmlElement.closest('.category');
        const categoryText = category.innerHTML;
        categories.forEach((category, index) => {
            if (category.name === categoryText) {
                categories.splice(index, 1);
            }
            const inputCategory = document.querySelector(`#radio-${category.name}`);
            const labelCategory = document.querySelector(`#label-${category.name}`);
            inputCategory.remove();
            labelCategory.remove();
        });
        category.remove();
    }
    ;
});
const renderCategoriesToApp = () => {
    categories.forEach(category => {
        const inputCategory = document.createElement('input');
        const labelCategory = document.createElement('label');
        inputCategory.setAttribute('type', 'radio');
        inputCategory.setAttribute('id', `radio-${category.name}`);
        inputCategory.setAttribute('name', 'category');
        inputCategory.setAttribute('title', category.color);
        inputCategory.value = category.name;
        labelCategory.setAttribute('for', `radio-${category.name}`);
        labelCategory.setAttribute('id', `label-${category.name}`);
        labelCategory.style.color = category.color;
        labelCategory.innerHTML = category.name.toUpperCase();
        sectionCategories.appendChild(inputCategory);
        sectionCategories.appendChild(labelCategory);
    });
};
