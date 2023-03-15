// capturar elementos desde DOM
const form = document.querySelector('form');
const newTaskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

// Capturar tareas de Local Storage o crear 1 array vacío
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Renderizar la lista de tareas
function renderTasks() {
  // borrar la lista de tareas
  taskList.innerHTML = '';

  // Mostrar cada tarea
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement('li');
    li.textContent = task;

    // botón de borrar tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', () => {
      deleteTask(i);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }
}

// Añadir tarea nueva
function addTask(event) {
  event.preventDefault();
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    newTaskInput.value = '';
    renderTasks();
  }
}

// Borrar Tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}


form.addEventListener('submit', addTask);


renderTasks();
