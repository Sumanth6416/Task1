function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    var li = document.createElement('li');
    li.textContent = taskInput.value;
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
      taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}
