// Obtener elementos del DOM
const form = document.querySelector('form');
const newTaskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

// Obtener tareas de Local Storage o crear un array vacío
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Renderizar la lista de tareas
function renderTasks() {
  // Vaciar la lista de tareas
  taskList.innerHTML = '';

  // Renderizar cada tarea
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement('li');
    li.textContent = task;

    // Añadir botón de borrar tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', () => {
      deleteTask(i);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }
}

// Añadir una nueva tarea
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

// Borrar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Event listeners
form.addEventListener('submit', addTask);

// Renderizar tareas iniciales
renderTasks();
