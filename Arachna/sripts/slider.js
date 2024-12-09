const images = document.querySelectorAll('.photo__image');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

document.querySelector('.photo__btn--next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector('.photo__btn--prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Показываем первое изображение при загрузке
showImage(currentIndex);
