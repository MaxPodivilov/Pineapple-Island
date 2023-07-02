let openPopupButton = document.getElementById('openPopupButton');
let popup = document.getElementById('popup');

openPopupButton.addEventListener('click', () => {
  console.log('click');
  popup.style.display = 'block';
  
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // Попап будет скрываться через 3 секунды (3000 миллисекунд)
});