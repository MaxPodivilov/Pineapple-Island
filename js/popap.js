function validateForm(event) {
  event.preventDefault(); // Отменяем стандартное поведение отправки формы

  const nameInput = document.getElementById('Name');
  const phoneInput = document.getElementById('Phone');
  const emailInput = document.getElementById('Email');

  if (nameInput.value === '' || phoneInput.value === '' || emailInput.value === '') {
    // Если хотя бы одно из полей не заполнено, выдаем сообщение об ошибке
    alert('Пожалуйста, заполните все поля формы.');
    return false; // Отменяем отправку формы
  }

  showPopup(); // Показываем попап только если все поля заполнены

  return false; // Отменяем отправку формы
}

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // Попап будет скрываться через 3 секунды (3000 миллисекунд)
}

document.querySelector('.feedback').addEventListener('submit', validateForm);
