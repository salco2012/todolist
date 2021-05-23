const todoList = document.querySelector('.todo__list');
const myForm = document.querySelector('.todo__form');
const inputTask = document.querySelector('.form__input');
const priorityButton = document.querySelector('.form__btn-priority');
const noteEmptyList = document.querySelector('.noteForEmptyList');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let newTask = document.createElement('li');
  newTask.textContent = inputTask.value;
  todoList.append(newTask);
  inputTask.value = '';

  let buttonDeleteTask = document.createElement('div');
  buttonDeleteTask.textContent = 'Удалить';
  buttonDeleteTask.classList.add('btn-del');
  newTask.append(buttonDeleteTask);

  if (priorityButton.classList.contains('is-important')) {
    newTask.classList.add('is-important')
  }
  showsNoteForm();
});

myForm.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-del')) {
    event.target.parentNode.remove();
    showsNoteForm();
  }
});

function showsNoteForm() {
  if (todoList.childElementCount > 0) {
    noteEmptyList.classList.add('no-show');
  } else {
    noteEmptyList.classList.remove('no-show');
  }
}

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 46 && todoList.lastChild) {
    todoList.removeChild(todoList.lastChild);
    showsNoteForm();
  }
});

priorityButton.addEventListener('click', function () {
  this.classList.toggle('is-important');
  if (this.classList.contains('is-important')) {
    this.textContent = 'Важная задача';
  } else {
    this.textContent = 'Обычная задача';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 17) {
    priorityButton.classList.toggle('is-important');
  }
  if (priorityButton.classList.contains('is-important')) {
    priorityButton.textContent = 'Важная задача';
  } else {
    priorityButton.textContent = 'Обычная задача';
  }
});