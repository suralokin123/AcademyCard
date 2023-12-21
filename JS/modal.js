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
