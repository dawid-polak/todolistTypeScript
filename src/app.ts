const mainInput: HTMLInputElement = document.querySelector('#main-input');
const mainBtn: HTMLButtonElement = document.querySelector('#main-btn');


type Categories = "sport" | "work" | "";

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

const addCategoryToTask = (radioChecked: string) => {
    if (radioChecked) {
        return radioChecked
    }

};

mainBtn.addEventListener('click', () => {

    const radioChecked: HTMLInputElement = document.querySelector("input[name='category']:checked");

    addTekstToTasks({
        name: mainInput.value,
        category: radioChecked ? addCategoryToTask(radioChecked.value) as Categories : "",
        done: false
    });
 });