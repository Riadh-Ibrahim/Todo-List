const nameInput = document.querySelector('input[name="name"]');
const contentInput = document.querySelector('input[name="content"]');
const addButton = document.querySelector('.bouton');
const todoList = document.querySelector('.todo-list');

nameInput.addEventListener('input', checkInput);
contentInput.addEventListener('input', checkInput);
addButton.addEventListener('click', addTodo);
  
function checkInput() {
    if (nameInput.value.trim() !== '' && contentInput.value.trim() !== '') {
      addButton.disabled = false;
      addButton.style.opacity = 1;
    } else {
      addButton.disabled = true;
      addButton.style.opacity = 0.5;
    }
}
  

function addTodo() {
  const name = nameInput.value.trim();
  const content = contentInput.value.trim();

  if (name === '' || content === '') {
    return false;
  }

  const li = document.createElement('li');
  
  const todoSpan = document.createElement('span');
  todoSpan.textContent = name+ ' : '+content;
  li.appendChild(todoSpan);
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', deleteTodo);
  li.appendChild(deleteButton);

  todoList.appendChild(li);

  nameInput.value = '';
  contentInput.value = '';

  bouton.disabled = true;
  bouton.style.opacity = 0.5;
}


function deleteTodo(event) {
    const li = event.target.closest('li');
    li.parentNode.removeChild(li);
}
