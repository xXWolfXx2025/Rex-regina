// Optional: Smooth scroll for Book Now button
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#book').scrollIntoView({ behavior: 'smooth' });
});
