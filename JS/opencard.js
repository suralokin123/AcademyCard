
const cardLinks = document.querySelectorAll('.information-cards a');

let clickCounts = { card1: 0, card2: 0, card3: 0 };

cardLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedCard = e.target.getAttribute('class').slice(-1);
    clickCounts[selectedCard]++;
    if (clickCounts[selectedCard] === 2) {
      openModal();
    }
  });
});