const burgerInput = document.querySelector('.burger-input');
const modal = document.querySelector('.modal');
const header = document.querySelector('.header');


burgerInput.addEventListener('change', () => {
  if (burgerInput.checked) {
    modal.classList.add('active');
    header.classList.add('transparent')
  } else {
    modal.classList.remove('active');
    header.classList.remove('transparent')
  }
});





