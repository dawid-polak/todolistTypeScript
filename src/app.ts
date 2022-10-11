const mainInput: HTMLInputElement = document.querySelector('#main-input');
const mainBtn: HTMLButtonElement = document.querySelector('#main-btn');

type Categories = "sport" | "work";

interface Task {
    name: string;
    category?: Categories;
    done: boolean;
}

const tasks: Task[] = [
    {
        name: 'Przebiec 10km',
        category: 'sport',
        done: false
    }
];


const addTekstToTasks = (task: Task) => {
    tasks.push(task);
};

mainBtn.addEventListener('click', () => {
    addTekstToTasks({
        name: mainInput.value,
        done: false
    })
})