const mainInput = document.querySelector('#main-input');
const mainBtn = document.querySelector('#main-btn');
const tasks = [
    {
        name: 'Przebiec 10km',
        category: 'sport',
        done: false
    }
];
const addTekstToTasks = (task) => {
    tasks.push(task);
};
const addCategoryToTask = (radioChecked) => {
    if (radioChecked) {
        return radioChecked;
    }
};
mainBtn.addEventListener('click', () => {
    const radioChecked = document.querySelector("input[name='category']:checked");
    addTekstToTasks({
        name: mainInput.value,
        category: radioChecked ? addCategoryToTask(radioChecked.value) : "",
        done: false
    });
});
