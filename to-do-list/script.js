const inputEl = document.querySelector('#input');
const addTaskButtonEl = document.querySelector('#add-btn');
const containerEl = document.querySelector('.container');

getTasks().forEach((task) => {
    const taskEl = createTaskEl(task.id, task.content);
    if (task.completed) {
        taskEl.querySelector('.text').classList.add('completed');
        taskEl.querySelector('input').checked = true;
    }
    containerEl.appendChild(taskEl);
});

function createTaskEl(id, content) {
    const taskContainerEl = document.createElement('div');
    taskContainerEl.classList.add('task');

    const textEl = document.createElement('span');
    textEl.classList.add('text');
    textEl.innerText = content;

    const checkEl = document.createElement('span');
    checkEl.innerHTML = `<input type="checkbox">`;

    const removeEl = document.createElement('i');
    removeEl.classList.add('fas', 'fa-remove');

    taskContainerEl.appendChild(textEl);
    taskContainerEl.appendChild(checkEl);
    taskContainerEl.appendChild(removeEl);

    // Handle delete
    removeEl.addEventListener('click', () => {
        const warning = confirm("Do you want to delete this task?");
        if (warning) {
            deleteTask(id, taskContainerEl);
        }
    });

    // Handle completion status
    checkEl.querySelector('input').addEventListener('change', (e) => {
        if (e.target.checked) {
            textEl.classList.add('completed');
        } else {
            textEl.classList.remove('completed');
        }

        const tasks = getTasks().map(task => {
            if (task.id === id) {
                return { ...task, completed: e.target.checked };
            }
            return task;
        });
        saveTasks(tasks);
    });

    return taskContainerEl;
}

function deleteTask(id, element) {
    const tasks = getTasks().filter((task) => task.id != id);
    saveTasks(tasks);
    containerEl.removeChild(element);
}

function addTask(e) {
    e.preventDefault();

    if (inputEl.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const tasks = getTasks();

    const taskObj = {
        id: Math.floor(Math.random() * 100000),
        content: inputEl.value,
        completed: false
    };

    const taskEl = createTaskEl(taskObj.id, taskObj.content);
    containerEl.appendChild(taskEl);

    tasks.push(taskObj);
    saveTasks(tasks);
    inputEl.value = "";
}

function saveTasks(tasks) {
    localStorage.setItem('task', JSON.stringify(tasks));
}

function getTasks() {
    return JSON.parse(localStorage.getItem('task') || "[]");
}

addTaskButtonEl.addEventListener('click', addTask);
