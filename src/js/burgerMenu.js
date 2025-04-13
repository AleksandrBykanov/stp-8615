const burgerInput = document.querySelector('.burger-input');
const modal = document.querySelector('.modal');
const header = document.querySelector('.header');
const menuItems = document.querySelectorAll('.modal-item');

function checkScreenSize() {
  if (window.innerWidth >= 1200 && modal.classList.contains('active')) {
    modal.classList.remove('active');
    header.classList.remove('transparent');
    burgerInput.checked = false;
  }
}

burgerInput.addEventListener('change', () => {
  if (burgerInput.checked) {
    modal.classList.add('active');
    header.classList.add('transparent');
  } else {
    modal.classList.remove('active');
    header.classList.remove('transparent');
  }
});


menuItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.remove('active');
    header.classList.remove('transparent');
    burgerInput.checked = false; 
  });
});



