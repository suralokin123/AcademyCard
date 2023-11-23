const cardLinks = document.querySelectorAll('.information-cards a');

cardLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedCard = e.target.getAttribute('class').slice(-1);
    const allCards = document.querySelectorAll('.info');
    
    allCards.forEach(card => {
      if (card.getAttribute('id').slice(-1) === selectedCard) {
        if (card.style.display === 'none' || card.style.display === '') {
          card.style.display = 'block';
        } else {
          // скрываем описание карты, если оно уже отображено
          card.style.display = 'none';
          // показываем модальное окно
          document.querySelector('.modal').style.display = 'block';
        }
      } else {
        card.style.display = 'none';
      }
    });
  });
});

function closeModal() {
  document.querySelector('.modal').style.display = 'none';
}
