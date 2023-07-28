document.getElementById('subscribeButton').addEventListener('click', function(event) {
    var emailInput = document.getElementById('emailInput').value;
    if (emailInput !== '') {
      event.preventDefault(); // Отменяем стандартное поведение отправки формы
      document.getElementById('popup-follow').style.display = 'block';
      setTimeout(function() {
        document.getElementById('popup-follow').style.display = 'none';
      }, 3000);
    }
  });