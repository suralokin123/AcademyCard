function showInfo(id) {
    const modal = document.getElementById(id);
    setTimeout(function() {
      modal.style.display = "block";
    }, 0); // таймер на 10 секунд
  }

  document.addEventListener("DOMContentLoaded", function() {
    var modal = document.querySelector('.modal');
    var closeBtn = document.querySelector('.close');
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      localStorage.setItem('modalClosed', 'true');
    });
  
    if (localStorage.getItem('modalClosed')) {
      modal.style.display = 'none';
    }
  });
  