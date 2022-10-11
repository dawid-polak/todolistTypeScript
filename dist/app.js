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
mainBtn.addEventListener('click', () => {
    addTekstToTasks({
        name: mainInput.value,
        done: false
    });
});
