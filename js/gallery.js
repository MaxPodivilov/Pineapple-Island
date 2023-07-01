let carousel = document.querySelector('.carousel');
let carouselItems = carousel.querySelectorAll('.discription-about');
let leftButton = carousel.querySelector('.carousel-left');
let rightButton = carousel.querySelector('.carousel-right');
let currentIndex = 1;

function showItem(index) {
    carouselItems.forEach(function(item, i) {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Проверяем, достигнут ли конец списка картинок
    if (index === carouselItems.length - 1) {
      rightButton.style.visibility = 'hidden'; // Скрываем кнопку "Вправо"
    } else {
      rightButton.style.visibility = 'visible'; // Показываем кнопку "Вправо"
    }
    
    // Проверяем, достигнуто ли начало списка картинок
    if (index === 0) {
      leftButton.style.visibility = 'hidden'; // Скрываем кнопку "Влево"
    } else {
      leftButton.style.visibility = 'visible'; // Показываем кнопку "Влево"
    }
  }
  
  leftButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].style.transform = 'translateX(-' + carouselItems[currentIndex].offsetWidth + 'px)';
    showItem(currentIndex);
    setTimeout(function() {
      carouselItems[currentIndex].style.transform = 'translateX(0)';
    }, 0);
  });
  
  rightButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].style.transform = 'translateX(' + carouselItems[currentIndex].offsetWidth + 'px)';
    showItem(currentIndex);
    setTimeout(function() {
      carouselItems[currentIndex].style.transform = 'translateX(0)';
    }, 0);
  });
  
  // Инициализация
  showItem(currentIndex);