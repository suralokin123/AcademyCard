document.querySelectorAll('.information-cards a').forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    modal.classList.add('show'); // добавляем класс для отображения модального окна
  });
});

document.querySelector('.close').addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('show'); // удаляем класс для скрытия модального окна
});

// Проверяем, было ли модальное окно открыто ранее и восстанавливаем его состояние
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  if (localStorage.getItem('modalOpen') === 'true') {
    modal.classList.add('show');
  }
});

// Обработчик клика на ссылки для открытия модального окна
document.querySelectorAll('.information-cards a').forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    modal.classList.add('show'); // добавляем класс для отображения модального окна
    localStorage.setItem('modalOpen', 'true'); // сохраняем состояние модального окна в localStorage
  });
});

// Обработчик клика на кнопку закрытия модального окна
document.querySelector('.close').addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('show'); // удаляем класс для скрытия модального окна
  localStorage.setItem('modalOpen', 'false'); // сохраняем состояние модального окна в localStorage
});