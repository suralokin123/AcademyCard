


const cardLinks = document.querySelectorAll('.information-cards a');

let clickCounts = { card1: 0, card2: 0, card3: 0 };

cardLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedCard = e.target.getAttribute('class').slice(-1);
    const allCards = document.querySelectorAll('.information-cards > div');

    allCards.forEach(card => {
      if (card.getAttribute('class').slice(-1) === selectedCard) {
        card.style.display = 'block';
        clickCounts[selectedCard]++;
        if (clickCounts[selectedCard] === 2) {
          openModal();
        }
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Функция для открытия модального окна
function openModal() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'block';
  // Сброс счетчика после открытия модального окна
  clickCounts = { card1: 0, card2: 0, card3: 0 };
}





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
  // Сохраняем информацию о состоянии модального окна в локальном хранилище
  localStorage.setItem('modalOpened', 'true');
}

// Добавляем обработчик для кнопки закрытия модального окна
document.querySelector('.close').addEventListener('click', function() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'none';
  // Удаляем информацию о состоянии модального окна из локального хранилища при закрытии
  localStorage.removeItem('modalOpened');
});

// Функция для проверки состояния модального окна при загрузке страницы
window.addEventListener('load', function() {
  var modalState = localStorage.getItem('modalOpened');
  if (modalState && modalState === 'true' && !isFirstVisit()) {
    openModal();
  }
});

// Функция для определения, является ли это первым посещением пользователя
function isFirstVisit() {
  if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    return true;
  } else {
    return false;
  }
}
