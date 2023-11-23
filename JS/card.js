const cardLinks = document.querySelectorAll('.information-cards a');

cardLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedCard = e.target.getAttribute('class').slice(-1);
    const allCards = document.querySelectorAll('.information-cards > div');
    
    allCards.forEach(card => {
      if (card.getAttribute('class').slice(-1) === selectedCard) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


function showInfo(id) {
  var infos = document.querySelectorAll('.info');
  infos.forEach(function(info) {
    info.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}


