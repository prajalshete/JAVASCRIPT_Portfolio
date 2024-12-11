const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">X</button>`;
  li.addEventListener('click', () => li.classList.toggle('completed'));

  taskList.appendChild(li);
  taskInput.value = '';
}

// Delete a task
function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}
