const burgerInput = document.querySelector('.burger-input');
const modal = document.querySelector('.modal');

function checkScreenSize() {
  if (window.innerWidth >= 1200 && modal.classList.contains('active')) {
    modal.classList.remove('active');

    burgerInput.checked = false;
  }
}

burgerInput.addEventListener('change', () => {
  if (burgerInput.checked) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
});

checkScreenSize();

window.addEventListener('resize', checkScreenSize);





