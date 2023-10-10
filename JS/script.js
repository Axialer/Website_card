let current = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName('magic');
  console.log(slides);
  slides[current].classList.remove('active');
  slides[n].classList.add('active');
  current = n;
  console.log(slides[n]);
}

document.addEventListener('keydown', function(event) {
  const slides = document.getElementsByClassName('magic');

  console.log(event);
  if (event.code == 'ArrowUp') {
    console.log("1p");
    showSlide(current - 1 >= 0 ? current - 1 : slides.length - 1);
  }
  if (event.code == 'ArrowDown') {
    showSlide(current + 1 < slides.length ? current + 1 : 0);
  }
  if (event.code == 'Enter') {
    window.location.href='projects.html';
  }
  if (event.code == 'Escape') {
    window.location.href='index.html';
  }
});