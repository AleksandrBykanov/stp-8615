const cookiesModal = document.querySelector('.cookies');
const acceptButton = document.querySelector('.cookies-accept');
const declineButton = document.querySelector('.cookies-decline');

if (!localStorage.getItem('cookiesAccepted')) {
  cookiesModal.style.display = 'block';
}

acceptButton.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true');
  cookiesModal.style.display = 'none';
});

declineButton.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'false');
  cookiesModal.style.display = 'none';
});