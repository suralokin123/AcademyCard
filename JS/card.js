const cardLinks = document.querySelectorAll('.information-cards a');

let infoOpened = false;

cardLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('card1') || e.target.classList.contains('card2') || e.target.classList.contains('card3')) {
      const selectedCard = e.target.getAttribute('class').slice(-1);
      const allCards = document.querySelectorAll('.information-cards > div');

      allCards.forEach(card => {
        if (card.getAttribute('class').slice(-1) === selectedCard) {
          card.style.display = 'block';
          if (infoOpened) {
            openModal();
          } else {
            infoOpened = true;
          }
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
});





// Функция для отображения информации о карте
function showInfo(infoId) {
  // Сначала скрываем все элементы с классом "info"
  var infoElements = document.querySelectorAll('.info');
  infoElements.forEach(function(element) {
    element.style.display = 'none';
  });

  // Затем отображаем элемент с соответствующим ID
  var infoElement = document.getElementById(infoId);
  infoElement.style.display = 'block';

  // Если этот элемент уже отображен, то открываем модальное окно
  if (infoElement.style.display === 'block') {
    openModal();
  }
}

// Функция для открытия модального окна
function openModal() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'block';
}

// Добавляем обработчик для кнопки закрытия модального окна
document.querySelector('.close').addEventListener('click', function() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'none';
});


