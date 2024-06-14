const registration = document.getElementById('reg_btn');

console.log(registration);

registration.addEventListener('click', (e) => {
  e.preventDefault();

  window.location.href='/registration';
})