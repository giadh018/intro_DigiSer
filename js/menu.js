const navToggle  = document.querySelector('.nav-toggle');
const navMenu    = document.querySelector('.main-nav');
const navOverlay = document.querySelector('.nav-overlay');

function closeMenu(){
  navMenu.classList.remove('active');
  navOverlay.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.innerHTML = "<i class='bx bx-menu'></i>";
}

navToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('active');
  navOverlay.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.innerHTML = open ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
});

navOverlay?.addEventListener('click', closeMenu);
document.querySelectorAll('.main-nav .nav-link').forEach(a =>
  a.addEventListener('click', closeMenu)
);
