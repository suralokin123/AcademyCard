document.querySelectorAll('.information-cards a').forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    modal.classList.add('show'); // добавляем класс для отображения модального окна
  });
});

let clickCount = 0;

function showInfo(infoId) {
  clickCount++;
  if (clickCount === 2) {
    // Дополнительный код для отображения модального окна
    alert('Модальное окно открывается на втором клике');
  }
  event.preventDefault(); // Предотвращение перехода по ссылке
}
